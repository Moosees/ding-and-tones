import actionTypes from './drum.types';

export const setDisplayedChord = (chord) => ({
  type: actionTypes.SET_DISPLAYED_CHORD,
  payload: chord,
});

export const setDisplayedNote = (note) => ({
  type: actionTypes.SET_DISPLAYED_NOTE,
  payload: note,
});

export const toggleShowIntervals = (showIntervals) => ({
  type: actionTypes.TOGGLE_SHOW_INTERVALS,
  payload: showIntervals,
});
