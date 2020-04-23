import actionTypes from './chords.types';

export const clearChordDisplay = () => ({
  type: actionTypes.CLEAR_CHORD,
});

export const displayChordOnDrum = (chord) => ({
  type: actionTypes.DISPLAY_CHORD,
  payload: chord,
});

export const findChordsInScale = (scale, chords) => ({
  type: actionTypes.FIND_CHORDS,
  payload: { scale, chords },
});
