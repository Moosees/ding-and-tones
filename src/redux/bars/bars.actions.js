import actionTypes from './bars.types';

export const updateBeat = (barId, beatId) => ({
  type: actionTypes.UPDATE_BEAT,
  payload: { barId, beatId },
});
