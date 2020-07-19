import { infoState } from '../song.initialState';
import songTypes from '../song.types';

const infoReducer = (state = infoState, { type, payload }) => {
  switch (type) {
    case songTypes.SAVE_SUCCESSFUL:
      return { ...state, title: payload.title };

    case songTypes.UPDATE_SONG_INFO:
      return { ...state, ...payload };

    case songTypes.UPDATE_SONG:
      return payload.info || state;

    default:
      return state;
  }
};

export default infoReducer;
