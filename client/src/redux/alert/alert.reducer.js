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
    case scaleTypes.FETCH_ERROR:
    case songTypes.FETCH_ERROR:
    case scaleTypes.SAVE_ERROR:
    case songTypes.SAVE_ERROR:
      return { ...state, msg: 'Request failed' };

    case scaleTypes.DELETE_SUCCESSFUL:
      return { ...state, msg: `"${payload.name}" deleted` };

    case scaleTypes.FETCH_SUCCESSFUL:
      return { ...state, msg: `"${payload.info.name}" loaded` };

    case songTypes.FETCH_SUCCESSFUL:
      return {
        ...state,
        msg: `"${payload.info.title}" by ${payload.composer} loaded`,
      };

    case scaleTypes.SAVE_SUCCESSFUL:
      return { ...state, msg: `"${payload.info.name}" saved` };

    case songTypes.SAVE_SUCCESSFUL:
      return { ...state, msg: `"${payload.title}" saved` };

    default:
      return state;
  }
};

export default alertReducer;
