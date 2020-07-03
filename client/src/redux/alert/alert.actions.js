import actionTypes from './alert.types';

export const setAlert = (msg) => ({
  type: actionTypes.SET_ALERT,
  payload: msg,
});
