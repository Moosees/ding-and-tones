import actionTypes from './bars.types';

export const updateBeat = (barId, beatId, beatIndex, newSound) => ({
  type: actionTypes.UPDATE_BEAT,
  payload: { barId, beatId, beatIndex, newSound },
});

export const setBarMetre = (barId, newMetre, newLengthInBeats) => ({
  type: actionTypes.SET_BAR_METRE,
  payload: { barId, newMetre, newLengthInBeats },
});

export const setBarSubdivision = (barId, newSubdivision) => ({
  type: actionTypes.SET_BAR_SUBDIVISION,
  payload: { barId, newSubdivision },
});

export const addNewBar = (newBar) => ({
  type: actionTypes.ADD_NEW_BAR,
  payload: newBar,
});
