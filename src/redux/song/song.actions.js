import actionTypes from './song.types';

export const addBarToSong = (barObject) => ({
  type: actionTypes.ADD_BAR_TO_SONG,
  payload: barObject,
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

export const setSongMetre = (newMetre) => ({
  type: actionTypes.SET_SONG_METRE,
  payload: newMetre,
});

export const setSongSubdivision = (newSubdivision) => ({
  type: actionTypes.SET_SONG_SUBDIVISION,
  payload: newSubdivision,
});
