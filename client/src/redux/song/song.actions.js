import songTypes from './song.types';

export const addNewBar = (barWithBeatsAndId) => ({
  type: songTypes.ADD_NEW_BAR,
  payload: barWithBeatsAndId, // { bar, barId, beats }
});

export const deleteBar = (barId) => ({
  type: songTypes.DELETE_BAR,
  payload: barId,
});

export const duplicateBar = (bar) => ({
  type: songTypes.DUPLICATE_BAR,
  payload: bar, // { oldBarId, newBarId, newMeasure, newBeats }
});

// export const loadSong = (song) => ({
//   type: songTypes.LOAD_SONG,
//   payload: song,
// });

export const moveBarInArrangement = (barIndex, targetIndex) => ({
  type: songTypes.MOVE_BAR,
  payload: { barIndex, targetIndex },
});

export const updateBarSubdivision = (barId, newSubdivision) => ({
  type: songTypes.UPDATE_BAR_SUBDIVISION,
  payload: { barId, newSubdivision },
});

export const updateBeat = (beatId, newSound) => ({
  type: songTypes.UPDATE_BEAT,
  payload: { beatId, newSound },
});

export const updateMeasureAndBeats = (barId, newMeasure, newBeats) => ({
  type: songTypes.UPDATE_MEASURE_AND_BEATS,
  payload: { barId, newMeasure, newBeats },
});

export const updateSong = (song) => ({
  type: songTypes.UPDATE_SONG,
  payload: song, // arrangement, bars, beats, info
});

export const updateSongInfo = (songInfo) => ({
  type: songTypes.UPDATE_SONG_INFO,
  payload: songInfo, // title, bpm, etc...
});
