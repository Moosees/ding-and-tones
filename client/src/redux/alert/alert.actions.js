import alertTypes from './alert.types';

export const setAlert = (msg) => ({
  type: alertTypes.CREATE_ALERT,
  payload: msg,
});
