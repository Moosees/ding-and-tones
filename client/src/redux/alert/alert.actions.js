import alertTypes from './alert.types';

export const clearAlert = () => ({
  type: alertTypes.CLEAR_ALERT,
});

export const createAlert = (msg) => ({
  type: alertTypes.CREATE_ALERT,
  payload: { alert: msg },
});
