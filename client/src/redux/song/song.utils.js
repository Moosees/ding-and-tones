import { metreList } from '../../assets/metre';
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

const parseMeasureForLoadSong = (measure, metre, subdivision) => {
  const { template } = metreList[metre];
  let measureIndex = 0;

  return template.map((templateValue, i) => {
    return {
      count: metreList[metre].count[i],
      value: template[i],
      beatId: templateValue <= subdivision ? measure[measureIndex++] : null,
    };
  });
};

const parseBarsForLoadSong = (bars) => {
  const parsedBars = bars.map((bar) => {
    const { measure, metre, subdivision } = bar;
    return {
      ...bar,
      measure: parseMeasureForLoadSong(measure, metre, subdivision),
    };
  });
  return parseArrayToObject(parsedBars);
};

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
    getScale: scale && getScale,
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

  if (soundArray.length >= 2) return soundArray;

  return [...soundArray, newSound]
    .filter((sound) => sound !== '-')
    .sort((a, b) => a - b);
};

export const removeSoundFromBeat = (newSound, soundArray) => {
  if (soundArray.length <= 1) return ['-'];

  return soundArray.filter((sound) => sound !== newSound);
};
