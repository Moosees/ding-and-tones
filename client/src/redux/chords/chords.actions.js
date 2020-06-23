import actionTypes from './chords.types';

export const toggleChordIsSelected = (id, scale) => ({
  type: actionTypes.SELECT_CHORD,
  payload: { id, scale },
});

export const setAllChordFiltersTo = (allSelected, currentScale) => ({
  type: actionTypes.SET_ALL_FILTERS,
  payload: { allSelected, currentScale },
});
