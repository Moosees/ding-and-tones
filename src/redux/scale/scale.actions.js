import actionTypes from './scale.types';

export const saveScale = (scale) => ({
  type: actionTypes.SAVE_SCALE,
  payload: scale,
});

export const toggleIsEditing = () => ({
  type: actionTypes.TOGGLE_IS_EDITING,
});

export const toggleShowIntervals = () => ({
  type: actionTypes.TOGGLE_SHOW_INTERVALS,
});
