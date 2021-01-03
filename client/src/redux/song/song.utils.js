import { parseNotesForSaveScale } from '../scale/scale.utils';

export const moveBar = (arrangement, barIndex, targetIndex) => {
  const arrCopy = [...arrangement];

  arrCopy.splice(targetIndex, 0, arrCopy.splice(barIndex, 1)[0]);

  return arrCopy;
};

const parseBarsForSaving = (arrangement, bars, beats) => {
  return arrangement.map((bar) => {
    const { measure, subdivision } = bars[bar];
    const filteredMeasure = measure.filter(
      (beat) => beats[beat].value <= subdivision
    );
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

    measure.forEach((beat) => {
      const { sound, value, mode } = beats[beat];
      if (value <= subdivision)
        parsedBeats.push({ sound: sound.join('+'), value, mode, _id: beat });
    });

    return parsedBeats;
  }, []);
};

export const parseSongForSaving = (song, scale, saveAs, title) => {
  const { arrangement, bars, beats, info, ui } = song;
  const { isOwner, songId } = ui;
  const { notes, info: scaleInfo } = scale;
  const parsedBars = parseBarsForSaving(arrangement, bars, beats);
  const parsedBeats = parseBeatsForSaving(arrangement, bars, beats);
  const songUpdate = {
    arrangement,
    bars: parsedBars,
    beats: parsedBeats,
    info,
    scale: {
      notes: parseNotesForSaveScale(notes),
      info: scaleInfo,
    },
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

const parseBeatsForLoadSong = (beats) => {
  const parsedBeats = beats.map((beat) => {
    const { sound, value, mode, _id } = beat;

    return { sound: sound.split('+'), value, mode, _id };
  });

  return parseArrayToObject(parsedBeats);
};

const parseScaleForLoadSong = (scale) => {
  const {
    info,
    notes: { dings, round },
  } = scale;

  return { info, notes: { round: [dings[0], ...round] } };
};

export const parseFetchedSong = (song, getScale) => {
  const {
    arrangement,
    bars,
    beats,
    composer,
    info,
    isOwner,
    scale,
    songId,
  } = song;

  const parsedBars = parseArrayToObject(bars);
  const parsedBeats = parseBeatsForLoadSong(beats);
  const parsedScale = parseScaleForLoadSong(scale);

  return {
    alert: `"${song.info.title}" by ${song.composer} loaded`,
    arrangement,
    bars: parsedBars,
    beats: parsedBeats,
    getScale,
    info,
    scale: parsedScale,
    ui: { composer, isOwner, songId },
  };
};

export const addSoundToBeat = (newSound, soundArray) => {
  if (soundArray.length >= 2) return soundArray;

  return [...soundArray, newSound]
    .filter((sound) => sound !== '-')
    .sort((a, b) => a - b);
};

export const removeSoundFromBeat = (newSound, soundArray) => {
  if (soundArray.length <= 1) return ['-'];

  return soundArray.filter((sound) => sound !== newSound);
};
