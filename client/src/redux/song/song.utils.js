import { v4 as uuid } from 'uuid';
import { MAX_NOTES_IN_BEAT } from '../../assets/constants';
import { getMetreTemplates, metreList } from '../../assets/metre';
import { parseScaleData } from '../scale/scale.utils';

export const createAutoMoveOrder = (song, beatsToAdd, barToSkip) => {
  const { arrangement, bars } = song;

  const beatOrder = [
    ...arrangement.reduce((acc, barId) => {
      if (barId === barToSkip) {
        return acc;
      }

      return [...acc, ...bars[barId].measure];
    }, []),
    ...(beatsToAdd || []),
  ];

  const autoMoveOrder = beatOrder.reduce((acc, beatId, i) => {
    const prevBeatId = i === 0 ? null : beatOrder[i - 1];
    const nextBeatId = i + 1 === beatOrder.length ? null : beatOrder[i + 1];

    acc[beatId] = { prevBeatId, nextBeatId };

    return acc;
  }, {});

  return autoMoveOrder;
};

export const moveBar = (arrangement, barIndex, targetIndex) => {
  const arrCopy = [...arrangement];

  arrCopy.splice(targetIndex, 0, arrCopy.splice(barIndex, 1)[0]);

  return arrCopy;
};

const parseArrayToObject = (array) => {
  return array.reduce((acc, { _id, ...rest }) => {
    acc[_id] = rest;
    return acc;
  }, {});
};

// converts subdivision for bars from number to [number]
const parseBarsForLoadSong = (bars) => {
  const parsedBars = bars.map((bar) => {
    if (bar.subdivisions?.length) {
      return bar;
    }

    const { measure, metre, subdivision, _id } = bar;
    const subdivisions = metreList[metre].beatLengths.map(() => subdivision);

    return { measure, metre, _id, subdivisions };
  });
  return parseArrayToObject(parsedBars);
};

const parseBeatsForLoadSong = (beats) => {
  const parsedBeats = beats.map((beat) => {
    const { sound, mode, hand, _id } = beat;

    return { sound: sound.split('+'), mode, hand, _id };
  });

  return parseArrayToObject(parsedBeats);
};

export const parseFetchedSong = (song, scale, getScale) => {
  const {
    arrangement,
    bars,
    beats,
    composer,
    info,
    isOwner,
    isPrivate,
    songId,
  } = song;

  const parsedBars = parseBarsForLoadSong(bars);
  const parsedBeats = parseBeatsForLoadSong(beats);
  const parsedScale = getScale && scale ? parseScaleData(scale, true) : {};
  const savedScale =
    scale && scale.info
      ? {
          scaleId: scale.scaleId,
          scaleName: `${scale.info.rootName} ${scale.info.name}`,
          scaleLabel: scale.info.label,
        }
      : { scaleId: null, scaleName: '', scaleLabel: '' };

  return {
    arrangement,
    bars: parsedBars,
    beats: parsedBeats,
    getScale: (scale && getScale) || false, // not needed?
    info,
    refs: { composer, isOwner, songId, isPrivate, scaleId: savedScale.scaleId },
    scale: parsedScale,
    ui: { scaleName: savedScale.scaleName, scaleLabel: savedScale.scaleLabel }, // not needed?
  };
};

export const createUpdatedSound = (sound, update, multiSelect) => {
  const isSelected = sound.includes(update);

  if (isSelected && sound.length <= 1) return ['-'];
  if (isSelected) return sound.filter((hit) => hit !== update);
  if (!multiSelect) return [update];
  if (sound.length >= MAX_NOTES_IN_BEAT) return sound;

  return [...sound, update].filter((hit) => hit !== '-').sort((a, b) => a - b);
};

const createBeatPool = (measure, template) => {
  const pool = {};

  for (const [i, value] of template.entries()) {
    if (!pool[value]) {
      pool[value] = [];
    }
    pool[value].push(measure[i]);
  }

  return pool;
};

const calculateMeasureAndBeatChanges = (measure, template, newTemplate) => {
  const beatPool = createBeatPool(measure, template);

  const newMeasureFromPool = newTemplate.map((value) => {
    return beatPool[value]?.length ? beatPool[value].shift() : null;
  });

  const remainingBeatsFromPool = Object.values(beatPool).flat();

  const newMeasureData = newMeasureFromPool.map((beatId) => {
    return !beatId && remainingBeatsFromPool.length
      ? remainingBeatsFromPool.shift()
      : beatId;
  });

  return { newMeasureData, beatsToDelete: remainingBeatsFromPool };
};

const createUpdateMeasureAndBeatsPayload = (measureData, deleteData) => {
  const payload = {
    addBeats: {},
    deleteBeats: deleteData,
    newMeasure: null,
  };

  payload.newMeasure = measureData.map((beatId) => {
    if (beatId) {
      return beatId;
    }

    const newBeatId = uuid();
    payload.addBeats[newBeatId] = {
      sound: ['-'],
      mode: 'c',
    };
    return newBeatId;
  });

  return payload;
};

export const updateMeasureAndBeats = (bar, newSubdivisions) => {
  const { metre, measure, subdivisions } = bar;
  const metreTemplates = getMetreTemplates(metre);

  const fullMeasureData = [];
  const fullBeatsToDelete = [];
  let measureIndex = 0;

  for (let i = 0; i < subdivisions.length; ++i) {
    const template = metreTemplates[i][subdivisions[i]].values;
    const newTemplate = metreTemplates[i][newSubdivisions[i]].values;
    const subMeasure = measure.slice(
      measureIndex,
      measureIndex + template.length
    );

    const { newMeasureData, beatsToDelete } = calculateMeasureAndBeatChanges(
      subMeasure,
      template,
      newTemplate
    );

    fullMeasureData.push(...newMeasureData);
    fullBeatsToDelete.push(...beatsToDelete);
    measureIndex = measureIndex + template.length;
  }

  return createUpdateMeasureAndBeatsPayload(fullMeasureData, fullBeatsToDelete);
};
