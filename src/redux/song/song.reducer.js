import actionTypes from './song.types';

const INITIAL_STATE = {
  bpm: 100,
  difficulty: 1,
  metre: 's44',
  subdivision: 4,
  title: 'This is a song',
};

const songReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_SONG_DIFFICULTY:
      return {
        ...state,
        difficulty: payload,
      };

    case actionTypes.SET_BPM:
      return {
        ...state,
        bpm: payload,
      };

    case actionTypes.SET_SONG_METRE:
      return {
        ...state,
        metre: payload,
      };

    case actionTypes.SET_SONG_SUBDIVISION:
      return {
        ...state,
        subdivision: payload,
      };

    case actionTypes.SET_SONG_TITLE:
      return {
        ...state,
        title: payload,
      };

    default:
      return state;
  }
};

export default songReducer;
