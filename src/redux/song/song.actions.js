import actionTypes from './song.types';

export const setBpm = (bpm) => ({
  type: actionTypes.SET_BPM,
  payload: bpm,
});

export const setCurrentBar = (barId) => ({
  type: actionTypes.SET_CURRENT_BAR,
  payload: barId,
});

export const setCurrentBeat = (beatId) => ({
  type: actionTypes.SET_CURRENT_BEAT,
  payload: beatId,
});

export const updateBeat = (barId, beatId) => ({
  type: actionTypes.UPDATE_BEAT,
  payload: { barId, beatId },
});
