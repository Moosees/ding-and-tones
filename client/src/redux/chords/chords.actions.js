import chordsTypes from './chords.types';

export const addChordToPrintList = (chord) => ({
  type: chordsTypes.ADD_CHORD_TO_PRINT,
  payload: { chord },
});

export const removeChordFromPrintList = (chord) => ({
  type: chordsTypes.REMOVE_CHORD_FROM_PRINT,
  payload: { nameShort: chord.nameShort },
});

export const toggleChordIsSelected = (id, scale) => ({
  type: chordsTypes.SELECT_CHORD,
  payload: { id, scale },
});

export const setAllChordFiltersTo = (allSelected, currentScale) => ({
  type: chordsTypes.SET_ALL_FILTERS,
  payload: { allSelected, currentScale },
});
