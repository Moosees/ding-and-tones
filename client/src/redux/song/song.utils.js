import { v4 as uuid } from 'uuid';
import { MAX_NOTES_IN_BEAT } from '../../assets/constants';
import { getMetreTemplates, metreList } from '../../assets/metre';
import { parseScaleData } from '../scale/scale.utils';

export const moveBar = (arrangement, barIndex, targetIndex) => {
  const arrCopy = [...arrangement];

  arrCopy.splice(targetIndex, 0, arrCopy.splice(barIndex, 1)[0]);

  return arrCopy;
};

const parseBarsForSaving = (arrangement, bars, beats) => {
  return arrangement.map((bar) => ({
    ...bars[bar],
    _id: bar,
  }));
};

const parseBeatsForSaving = (arrangement, bars, beats) => {
  const allBeatIds = arrangement.reduce((acc, barId) => {
    return [...acc, ...bars[barId].measure];
  }, []);

  return allBeatIds.map((beatId) => {
    const { sound, mode, hand } = beats[beatId];

    return {
      sound: sound.join('+'),
      hand,
      mode,
      _id: beatId,
    };
  });
};

export const parseSongForSaving = (song, saveAs, title, scaleId) => {
  const {
    arrangement,
    bars,
    beats,
    info,
    ui: { isOwner, isPrivate, songId },
  } = song;
  const parsedBars = parseBarsForSaving(arrangement, bars, beats);
  const parsedBeats = parseBeatsForSaving(arrangement, bars, beats);
  const songUpdate = {
    arrangement,
    bars: parsedBars,
    beats: parsedBeats,
    scale: scaleId,
    info,
    isPrivate,
  };
  if (title) songUpdate.info.title = title;

  return {
    songId: isOwner && !saveAs ? songId : null,
    songUpdate,
  };
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

export const parseFetchedSong = (song, getScale, suppressAlert) => {
  const {
    arrangement,
    bars,
    beats,
    composer,
    info,
    isOwner,
    isPrivate,
    scale,
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

  const parsedSongData = {
    arrangement,
    bars: parsedBars,
    beats: parsedBeats,
    getScale: (scale && getScale) || false,
    info,
    scale: parsedScale,
    ui: { composer, isOwner, songId, isPrivate, ...savedScale },
  };

  if (!suppressAlert) {
    parsedSongData.alert = `"${song.info.title}" by ${song.composer} loaded`;
  }

  return parsedSongData;
};

export const addSoundToBeat = (newSound, soundArray, multiSelect) => {
  if (!multiSelect) return [newSound];

  if (soundArray.length >= MAX_NOTES_IN_BEAT) return soundArray;

  return [...soundArray, newSound]
    .filter((sound) => sound !== '-')
    .sort((a, b) => a - b);
};

export const removeSoundFromBeat = (newSound, soundArray) => {
  if (soundArray.length <= 1) return ['-'];

  return soundArray.filter((sound) => sound !== newSound);
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
    measure: null,
  };

  payload.measure = measureData.map((beatId) => {
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
