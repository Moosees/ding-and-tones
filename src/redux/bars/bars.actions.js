import actionTypes from './bars.types';

export const updateBeat = (barId, beatId, value) => ({
  type: actionTypes.UPDATE_BEAT,
  payload: { barId, beatId, value },
});

export const setBarTime = (barId, timeSignature) => ({
  type: actionTypes.SET_BAR_TIME,
  payload: { barId, timeSignature },
});

export const setBarGrid = (barId, gridValue) => ({
  type: actionTypes.SET_BAR_GRID,
  payload: { barId, gridValue },
});
