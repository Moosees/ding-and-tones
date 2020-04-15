import actionTypes from './bars.types';

export const updateBeat = (barId, beatId, beatIndex, newSound) => ({
  type: actionTypes.UPDATE_BEAT,
  payload: { barId, beatId, beatIndex, newSound },
});

export const setBarTime = (barId, timeSignature) => ({
  type: actionTypes.SET_BAR_TIME,
  payload: { barId, timeSignature },
});

export const setBarSubdivision = (barId, subdivision) => ({
  type: actionTypes.SET_BAR_SUBDIVISION,
  payload: { barId, subdivision },
});

export const addNewBar = (newBar) => ({
  type: actionTypes.ADD_NEW_BAR,
  payload: newBar,
});
