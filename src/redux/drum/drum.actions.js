import actionTypes from './drum.types';

export const flushDrumState = () => ({
  type: actionTypes.FLUSH_DRUM_STATE,
});

export const setDisplayedChord = (chord) => ({
  type: actionTypes.SET_DISPLAYED_CHORD,
  payload: chord,
});

export const setDisplayedNote = (note) => ({
  type: actionTypes.SET_DISPLAYED_NOTE,
  payload: note,
});

export const setShowIntervals = (showIntervals) => ({
  type: actionTypes.SET_SHOW_INTERVALS,
  payload: showIntervals,
});
