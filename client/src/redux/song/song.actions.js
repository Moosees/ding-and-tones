import actionTypes from './song.types';

export const addNewBar = (barWithBeatsAndId) => ({
  type: actionTypes.ADD_NEW_BAR,
  payload: barWithBeatsAndId, // { bar, barId, beats }
});

export const deleteBar = (barId) => ({
  type: actionTypes.DELETE_BAR,
  payload: barId,
});

export const duplicateBar = (bar) => ({
  type: actionTypes.DUPLICATE_BAR,
  payload: bar, // { oldBarId, newBarId, newMeasure, newBeats }
});

// export const loadSong = (song) => ({
//   type: actionTypes.LOAD_SONG,
//   payload: song,
// });

export const moveBarInArrangement = (barIndex, targetIndex) => ({
  type: actionTypes.MOVE_BAR,
  payload: { barIndex, targetIndex },
});

export const updateBarSubdivision = (barId, newSubdivision) => ({
  type: actionTypes.UPDATE_BAR_SUBDIVISION,
  payload: { barId, newSubdivision },
});

export const updateBeat = (beatId, newSound) => ({
  type: actionTypes.UPDATE_BEAT,
  payload: { beatId, newSound },
});

export const updateMeasureAndBeats = (barId, newMeasure, newBeats) => ({
  type: actionTypes.UPDATE_MEASURE_AND_BEATS,
  payload: { barId, newMeasure, newBeats },
});

export const updateSong = (song) => ({
  type: actionTypes.UPDATE_SONG,
  payload: song, // arrangement, bars, beats, info
});

export const updateSongInfo = (songInfo) => ({
  type: actionTypes.UPDATE_SONG_INFO,
  payload: songInfo, // title, bpm, etc...
});
