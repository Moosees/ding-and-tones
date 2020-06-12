import actionTypes from './bars.types';

export const addNewBar = ({ barId, data, measure }) => ({
  type: actionTypes.ADD_NEW_BAR,
  payload: { barId, data, measure },
});

export const copyBarToEnd = (barId) => ({
  type: actionTypes.COPY_BAR_TO_END,
  payload: barId,
});

// export const copyBarToNext = (barId, previousId) => ({
//   type: actionTypes.COPY_BAR_TO_NEXT,
//   payload: { barId, previousId },
// });

export const deleteBar = (barId) => ({
  type: actionTypes.DELETE_BAR,
  payload: barId,
});

export const setBarMetre = (barId, newMetre, newLengthInBeats) => ({
  type: actionTypes.SET_BAR_METRE,
  payload: { barId, newMetre, newLengthInBeats },
});

export const setBarSubdivision = (barId, newSubdivision) => ({
  type: actionTypes.SET_BAR_SUBDIVISION,
  payload: { barId, newSubdivision },
});

export const updateBeat = (barId, beatId, beatIndex, newSound) => ({
  type: actionTypes.UPDATE_BEAT,
  payload: { barId, beatId, beatIndex, newSound },
});
