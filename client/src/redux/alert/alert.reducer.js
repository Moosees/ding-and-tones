import scaleTypes from '../scale/scale.types';
import songTypes from '../song/song.types';
import alertTypes from './alert.types';

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
    case songTypes.DELETE_ERROR:
    case scaleTypes.FETCH_ERROR:
    case songTypes.FETCH_ERROR:
    case scaleTypes.SAVE_ERROR:
    case songTypes.SAVE_ERROR:
      return { ...state, msg: 'Request failed' };

    case scaleTypes.DELETE_SUCCESSFUL:
    case songTypes.DELETE_SUCCESSFUL:
    case scaleTypes.FETCH_SUCCESSFUL:
    case songTypes.FETCH_SUCCESSFUL:
    case scaleTypes.SAVE_SUCCESSFUL:
    case songTypes.SAVE_SUCCESSFUL:
      return { ...state, msg: payload.alert };

    default:
      return state;
  }
};

export default alertReducer;