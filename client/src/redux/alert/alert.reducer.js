import alertTypes from './alert.types';

const INITIAL_STATE = {
  msg: '',
};

const alertReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case alertTypes.CLEAR_ALERT:
      return {
        ...state,
        msg: '',
      };

    default:
      return payload?.alert ? { ...state, msg: payload.alert } : state;
  }
};

export default alertReducer;
