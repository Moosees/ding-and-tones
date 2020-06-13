import actionTypes from './bars.types';

export const addNewBar = ({ barId, barData, beats }) => ({
  type: actionTypes.ADD_NEW_BAR,
  payload: { barId, barData, beats },
});

export const copyBarToEnd = (oldBarId, newBarId) => ({
  type: actionTypes.COPY_BAR_TO_END,
  payload: { oldBarId, newBarId },
});

// export const copyBarToNext = (barId, previousId) => ({
//   type: actionTypes.COPY_BAR_TO_NEXT,
//   payload: { barId, previousId },
// });

export const deleteBar = (barId) => ({
  type: actionTypes.DELETE_BAR,
  payload: barId,
});

// export const setBarMetre = (barId, newMetre, newLengthInBeats) => ({
//   type: actionTypes.SET_BAR_METRE,
//   payload: { barId, newMetre, newLengthInBeats },
// });

export const setBarSubdivision = (barId, newSubdivision) => ({
  type: actionTypes.SET_BAR_SUBDIVISION,
  payload: { barId, newSubdivision },
});

export const updateBeat = (beatId, newSound) => ({
  type: actionTypes.UPDATE_BEAT,
  payload: { beatId, newSound },
});
