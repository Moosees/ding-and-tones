import actionTypes from './search.types';

export const setScalesFound = (scales) => ({
  type: actionTypes.SET_SCALES_FOUND,
  payload: scales,
});
