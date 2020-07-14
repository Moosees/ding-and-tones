import { infoState } from '../song.initialState';
import songTypes from '../song.types';

const infoReducer = (state = infoState, { type, payload }) => {
  switch (type) {
    case songTypes.UPDATE_SONG:
      return payload.info || state;

    case songTypes.UPDATE_SONG_INFO:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default infoReducer;
