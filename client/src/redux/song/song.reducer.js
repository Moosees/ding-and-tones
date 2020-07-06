import actionTypes from './song.types';

const INITIAL_STATE = {
  bpm: 100,
  difficulty: 1,
  isOwner: false,
  metre: 's44',
  songId: null,
  subdivision: 4,
  title: 'This is a song',
};

const songReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_SONG_INFO:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default songReducer;
