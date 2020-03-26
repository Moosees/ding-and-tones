import actionTypes from './song.types';

export const setBpm = bpm => ({
  type: actionTypes.SET_BPM,
  payload: bpm
});
