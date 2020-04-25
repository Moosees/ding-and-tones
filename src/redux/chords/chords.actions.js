import actionTypes from './chords.types';

export const findChordsInScale = (scale, chords) => ({
  type: actionTypes.FIND_CHORDS,
  payload: { scale, chords },
});
