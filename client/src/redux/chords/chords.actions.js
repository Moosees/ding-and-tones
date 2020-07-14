import chordsTypes from './chords.types';

export const toggleChordIsSelected = (id, scale) => ({
  type: chordsTypes.SELECT_CHORD,
  payload: { id, scale },
});

export const setAllChordFiltersTo = (allSelected, currentScale) => ({
  type: chordsTypes.SET_ALL_FILTERS,
  payload: { allSelected, currentScale },
});
