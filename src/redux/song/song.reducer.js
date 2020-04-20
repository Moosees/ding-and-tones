import actionTypes from './song.types';

const INITIAL_STATE = {
  name: 'This is a song',
  arrangement: [{ barId: 'bar_a', arrangementId: 'bar_1' }],
  bpm: 100,
  metre: 's44',
  subdivision: 4,
  currentBar: null,
  currentBeat: null,
  isSongPlaying: false,
};

const songReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
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

    case actionTypes.SET_CURRENT_BAR:
      return {
        ...state,
        currentBar: payload,
      };

    case actionTypes.SET_CURRENT_BEAT:
      return {
        ...state,
        currentBeat: payload,
      };

    case actionTypes.SET_IS_SONG_PLAYING:
      return {
        ...state,
        isSongPlaying: payload,
      };

    case actionTypes.ADD_BAR_TO_SONG:
      return {
        ...state,
        arrangement: [...state.arrangement, payload],
      };

    case actionTypes.DELETE_BAR_FROM_SONG:
      const updatedBars = state.arrangement.filter(
        (bar) => bar.arrangementId !== payload
      );
      return { ...state, arrangement: updatedBars };

    default:
      return state;
  }
};

export default songReducer;
