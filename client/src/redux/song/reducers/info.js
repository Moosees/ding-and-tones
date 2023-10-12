import { infoState } from '../song.initialState';
import songTypes from '../song.types';

const infoReducer = (state = infoState, { type, payload }) => {
  switch (type) {
    case songTypes.SAVE_SUCCESSFUL:
      return { ...state, title: payload.song.title };

    case songTypes.FETCH_SUCCESSFUL:
    case songTypes.SET_STATE:
      return payload.song.info || state;

    case songTypes.UPDATE_SONG_INFO:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default infoReducer;
