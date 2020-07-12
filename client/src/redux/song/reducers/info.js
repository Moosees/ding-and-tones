import { infoState } from '../song.initialState';
import actionTypes from '../song.types';

const infoReducer = (state = infoState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_SONG:
      return payload.info || state;

    case actionTypes.UPDATE_SONG_INFO:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default infoReducer;
