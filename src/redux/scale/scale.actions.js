import actionTypes from './scale.types';

export const saveScale = (scale) => ({
  type: actionTypes.SAVE_SCALE,
  payload: scale,
});
