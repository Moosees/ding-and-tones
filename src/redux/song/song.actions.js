import actionTypes from './song.types';

export const setBpm = (bpm) => ({
  type: actionTypes.SET_BPM,
  payload: bpm,
});

export const setSongTime = (timeSignature) => ({
  type: actionTypes.SET_SONG_TIME,
  payload: timeSignature,
});

export const setSongGrid = (gridValue) => ({
  type: actionTypes.SET_SONG_GRID,
  payload: gridValue,
});

export const setCurrentBar = (barId) => ({
  type: actionTypes.SET_CURRENT_BAR,
  payload: barId,
});

export const setCurrentBeat = (beatId) => ({
  type: actionTypes.SET_CURRENT_BEAT,
  payload: beatId,
});

export const setIsSongPlaying = (isSongPlaying) => ({
  type: actionTypes.SET_IS_SONG_PLAYING,
  payload: isSongPlaying,
});

export const addBarToSong = (bar) => ({
  type: actionTypes.ADD_BAR_TO_SONG,
  payload: bar,
});
