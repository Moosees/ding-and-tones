import actionTypes from './alert.types';

const INITIAL_STATE = {
  msg: '',
};

const alertReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ALERT:
      return {
        ...state,
        msg: payload,
      };

    default:
      return state;
  }
};

export default alertReducer;
