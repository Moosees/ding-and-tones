import actionTypes from './search.types';

export const deleteFoundScale = (scaleId) => ({
  type: actionTypes.DELETE_FOUND_SCALE,
  payload: scaleId,
});

export const setScalesFound = (scales) => ({
  type: actionTypes.SET_SCALES_FOUND,
  payload: scales,
});
