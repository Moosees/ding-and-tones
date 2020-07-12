import { infoState } from '../song.initialState';
import actionTypes from '../song.types';

const infoReducer = (state = infoState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOAD_SONG:
      return state;

    case actionTypes.UPDATE_SONG_INFO:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default infoReducer;
