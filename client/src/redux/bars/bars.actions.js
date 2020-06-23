import actionTypes from './bars.types';

export const addNewBar = ({ barId, barData, beats }) => ({
  type: actionTypes.ADD_NEW_BAR,
  payload: { barId, barData, beats },
});

export const clearSong = () => ({
  type: actionTypes.CLEAR_SONG,
});

export const duplicateBar = ({ oldBarId, newBarId, newMeasure, newBeats }) => ({
  type: actionTypes.DUPLICATE_BAR,
  payload: { oldBarId, newBarId, newMeasure, newBeats },
});

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

export const moveBarInArrangement = (barIndex, targetIndex) => ({
  type: actionTypes.MOVE_BAR,
  payload: { barIndex, targetIndex },
});

export const updateBeat = (beatId, newSound) => ({
  type: actionTypes.UPDATE_BEAT,
  payload: { beatId, newSound },
});

export const updateMeasureAndBeats = (barId, newMeasure, newBeats) => ({
  type: actionTypes.UPDATE_MEASURE_AND_BEATS,
  payload: { barId, newMeasure, newBeats },
});
