import alertTypes from './alert.types';
import scaleTypes from '../scale/scale.types';

const INITIAL_STATE = {
  msg: '',
};

const alertReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case alertTypes.CREATE_ALERT:
      return {
        ...state,
        msg: payload,
      };

    case scaleTypes.SCALE_DELETE_SUCCESSFUL:
      return { ...state, msg: `"${payload.name}" deleted` };

    default:
      return state;
  }
};

export default alertReducer;
