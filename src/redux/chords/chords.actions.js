import actionTypes from './chords.types';

export const toggleChordIsSelected = (id, scale) => ({
  type: actionTypes.SELECT_CHORD,
  payload: { id, scale },
});
