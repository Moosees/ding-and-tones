import { v4 as uuid } from 'uuid';
import { MAX_NOTES_IN_BEAT } from '../../assets/constants';
import { getMetreTemplates } from '../../assets/metre';
import { parseScaleData } from '../scale/scale.utils';

export const moveBar = (arrangement, barIndex, targetIndex) => {
  const arrCopy = [...arrangement];

  arrCopy.splice(targetIndex, 0, arrCopy.splice(barIndex, 1)[0]);

  return arrCopy;
};

const parseBarsForSaving = (arrangement, bars, beats) => {
  return arrangement.map((bar) => {
    const { measure, subdivision } = bars[bar];
    const filteredMeasure = measure.reduce((acc, { beatId }) => {
      if (beatId && beats[beatId].value <= subdivision) acc.push(beatId);
      return acc;
    }, []);

    return {
      ...bars[bar],
      measure: filteredMeasure,
      _id: bar,
    };
  });
};

const parseBeatsForSaving = (arrangement, bars, beats) => {
  return arrangement.reduce((parsedBeats, bar) => {
    const { measure, subdivision } = bars[bar];

    measure.forEach(({ beatId }) => {
      if (beatId && beats[beatId].value <= subdivision) {
        const { sound, value, mode, hand } = beats[beatId];
        parsedBeats.push({
          sound: sound.join('+'),
          value,
          hand,
          mode,
          _id: beatId,
        });
      }
    });

    return parsedBeats;
  }, []);
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

// const parseMeasureForLoadSong = (measure, metre, subdivision) => {
//   const { template } = metreList[metre];
//   let measureIndex = 0;

//   return template.map((templateValue, i) => {
//     return {
//       count: metreList[metre].count[i],
//       value: template[i],
//       beatId: templateValue <= subdivision ? measure[measureIndex++] : null,
//     };
//   });
// };

// const parseBarsForLoadSong = (bars) => {
//   const parsedBars = bars.map((bar) => {
//     const { measure, metre, subdivision } = bar;
//     return {
//       ...bar,
//       measure: parseMeasureForLoadSong(measure, metre, subdivision),
//     };
//   });
//   return parseArrayToObject(parsedBars);
// };

const parseBeatsForLoadSong = (beats) => {
  const parsedBeats = beats.map((beat) => {
    const { sound, value, mode, hand, _id } = beat;

    return { sound: sound.split('+'), value, mode, hand, _id };
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

  console.log({ bars });
  // const parsedBars = parseBarsForLoadSong(bars);
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
    // bars: parsedBars,
    bars: parseArrayToObject(bars),
    beats: parsedBeats,
    getScale: (scale && getScale) || false,
    info,
    scale: parsedScale,
    ui: { composer, isOwner, songId, isPrivate, ...savedScale },
  };

  if (!suppressAlert) {
    parsedSongData.alert = `"${song.info.title}" by ${song.composer} loaded`;
  }
  console.log({ parsedSongData });

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

const getTemplateValuesCount = (templateValues) => {
  const count = {};
  for (const value of templateValues) {
    count[value] !== undefined ? ++count[value] : (count[value] = 1);
  }
  return count;
};

const getBeatsToDelete = (measureMatches, measure, measureIndex) => {
  return measure.reduce((acc, beatId, i) => {
    if (!measureMatches[i].match) {
      acc.push({ beatId, index: i + measureIndex });
    }

    return acc;
  }, []);
};

export const calculateMeasureAndBeatChanges = (
  measure,
  measureIndex,
  template,
  newTemplate
) => {
  const templateValuesCount = getTemplateValuesCount(template);
  const measureMatches = template.map((value) => ({ value, match: false }));
  const newMeasureData = [];
  let matches = 0;

  for (let i = 0; i < newTemplate.length; ++i) {
    measureIndex === 0 &&
      console.log({
        measure,
        template,
        newTemplate,
        isMatch: !!templateValuesCount[newTemplate[i]],
        measureMatches: [...measureMatches],
        matches,
        newMeasureData: { ...newMeasureData },
      });
    const beat = {
      value: newTemplate[i],
      foundMatch: false,
    };

    if (templateValuesCount[newTemplate[i]]) {
      ++matches;
      --templateValuesCount[newTemplate[i]];

      const oldIndex = measureMatches.findIndex(({ match }) => !match);

      measureMatches[oldIndex].match = true;
      beat.foundMatch = true;
      beat.oldIndex = oldIndex + measureIndex;
      beat.beatId = measure[oldIndex];
      beat.oldValue = template[oldIndex];
    }

    newMeasureData.push(beat);
  }

  let unusedBeats = template.length - matches;
  let newBeatsNeeded = newTemplate.length - matches;

  while (unusedBeats && newBeatsNeeded) {
    const oldIndex = measureMatches.findIndex(({ match }) => !match);
    const newIndex = newMeasureData.findIndex((beat) => !beat.foundMatch);
    // console.log({ oldIndex, newIndex, unusedBeats, newBeatsNeeded });

    measureMatches[oldIndex].match = true;
    newMeasureData[newIndex].foundMatch = true;
    newMeasureData[newIndex].oldIndex = oldIndex + measureIndex;
    newMeasureData[newIndex].beatId = measure[oldIndex];
    newMeasureData[newIndex].oldValue = template[oldIndex];

    --unusedBeats;
    --newBeatsNeeded;
  }

  const beatsToDelete = !unusedBeats
    ? []
    : getBeatsToDelete(measureMatches, measure, measureIndex);

  return { newMeasureData, beatsToDelete };
};

export const updateMeasureAndBeats = (bar, newSubdivision) => {
  const { metre, measure, subdivision } = bar;
  const metreTemplates = getMetreTemplates(metre);

  const fullMeasureData = [];
  const fullBeatsToDelete = [];
  let measureIndex = 0;

  for (let i = 0; i < subdivision.length; ++i) {
    const template = metreTemplates[i][subdivision[i]].values;
    const newTemplate = metreTemplates[i][newSubdivision[i]].values;
    const subMeasure = measure.slice(
      measureIndex,
      measureIndex + template.length
    );

    const { newMeasureData, beatsToDelete } = calculateMeasureAndBeatChanges(
      subMeasure,
      measureIndex,
      template,
      newTemplate
    );

    fullMeasureData.push(...newMeasureData);
    fullBeatsToDelete.push(...beatsToDelete);
    measureIndex = measureIndex + template.length;
  }

  console.log('updateMeasureAndBeats', {
    fullMeasureData,
    fullBeatsToDelete,
    subdivision,
    newSubdivision,
  });
  const payload = {
    addBeats: {},
    deleteBeats: null,
    updateBeats: [],
    measure: null,
  };

  payload.measure = fullMeasureData.map((beat) => {
    const beatId = beat.beatId || uuid();
    if (beat.beatId) {
      payload.updateBeats.push({ beatId, value: beat.value });

      return beatId;
    }
    payload.addBeats[beatId] = {
      sound: ['-'],
      value: beat.value,
      mode: 'c',
    };

    return beatId;
  });

  payload.deleteBeats = fullBeatsToDelete.map(({ beatId }) => beatId);

  return payload;
};
