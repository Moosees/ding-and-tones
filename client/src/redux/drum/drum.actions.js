import drumTypes from './drum.types';

export const flushDrumState = () => ({
  type: drumTypes.FLUSH_DRUM_STATE,
});

export const setDisplayedChord = (chord) => ({
  type: drumTypes.SET_DISPLAYED_CHORD,
  payload: chord,
});

export const setDisplayedNote = (note) => ({
  type: drumTypes.SET_DISPLAYED_NOTE,
  payload: note,
});

export const setShowIntervals = (showIntervals) => ({
  type: drumTypes.SET_SHOW_INTERVALS,
  payload: showIntervals,
});
