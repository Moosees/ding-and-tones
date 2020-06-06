import actionTypes from './song.types';

export const addBarToSong = (barObject) => ({
  type: actionTypes.ADD_BAR_TO_SONG,
  payload: barObject,
});

export const changeBarInPlace = (arrangementId, newBarId) => ({
  type: actionTypes.CHANGE_BAR_IN_PLACE,
  payload: { arrangementId, newBarId },
});

export const copyBarToEnd = (barId) => ({
  type: actionTypes.COPY_BAR_TO_END,
  payload: barId,
});

export const copyBarToNext = (barId, previousId) => ({
  type: actionTypes.COPY_BAR_TO_NEXT,
  payload: { barId, previousId },
});

export const deleteBarFromSong = (arrangementId) => ({
  type: actionTypes.DELETE_BAR_FROM_SONG,
  payload: arrangementId,
});

export const setBpm = (newBpm) => ({
  type: actionTypes.SET_BPM,
  payload: newBpm,
});

export const setSongDifficulty = (newDifficulty) => ({
  type: actionTypes.SET_SONG_DIFFICULTY,
  payload: newDifficulty,
});

export const setSongMetre = (newMetre) => ({
  type: actionTypes.SET_SONG_METRE,
  payload: newMetre,
});

export const setSongSubdivision = (newSubdivision) => ({
  type: actionTypes.SET_SONG_SUBDIVISION,
  payload: newSubdivision,
});

export const setSongTitle = (newTitle) => ({
  type: actionTypes.SET_SONG_TITLE,
  payload: newTitle,
});
