import actionTypes from './bars.types';

export const updateBeat = (barId, beatId, value) => ({
  type: actionTypes.UPDATE_BEAT,
  payload: { barId, beatId, value },
});
