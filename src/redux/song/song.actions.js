import actionTypes from './song.types';

export const setBpm = (newBpm) => ({
  type: actionTypes.SET_BPM,
  payload: newBpm,
});

export const setSongTime = (newTimeSignature) => ({
  type: actionTypes.SET_SONG_TIME,
  payload: newTimeSignature,
});

export const setSongSubdivision = (newSubdivision) => ({
  type: actionTypes.SET_SONG_SUBDIVISION,
  payload: newSubdivision,
});

export const setCurrentBar = (arrangementId) => ({
  type: actionTypes.SET_CURRENT_BAR,
  payload: arrangementId,
});

export const setCurrentBeat = (beatId) => ({
  type: actionTypes.SET_CURRENT_BEAT,
  payload: beatId,
});

export const setIsSongPlaying = (isSongPlaying) => ({
  type: actionTypes.SET_IS_SONG_PLAYING,
  payload: isSongPlaying,
});

export const addBarToSong = (barObject) => ({
  type: actionTypes.ADD_BAR_TO_SONG,
  payload: barObject,
});

export const deleteBarFromSong = (arrangementId) => ({
  type: actionTypes.DELETE_BAR_FROM_SONG,
  payload: arrangementId,
});
