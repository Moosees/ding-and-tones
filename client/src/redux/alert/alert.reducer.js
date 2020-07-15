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

    case scaleTypes.DELETE_ERROR:
    case scaleTypes.FETCH_ERROR:
    case scaleTypes.SAVE_ERROR:
      return { ...state, msg: 'Request failed' };

    case scaleTypes.DELETE_SUCCESSFUL:
      return { ...state, msg: `"${payload.name}" deleted` };

    case scaleTypes.FETCH_SUCCESSFUL:
      return { ...state, msg: `"${payload.name}" loaded` };

    case scaleTypes.SAVE_SUCCESSFUL:
      return { ...state, msg: `"${payload.name}" saved` };

    default:
      return state;
  }
};

export default alertReducer;
