import actionTypes from './song.types';

const INITIAL_STATE = {
  bars: [
    { bar: 'bar_a', id: 'bar_1' },
    { bar: 'bar_a', id: 'bar_2' },
    { bar: 'bar_a', id: 'bar_3' },
    { bar: 'bar_b', id: 'bar_4' },
  ],
  bpm: 100,
  currentBar: null,
  currentBeat: null,
  isPlaying: false,
};

const songReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_BPM:
      return {
        ...state,
        bpm: action.payload,
      };

    case actionTypes.SET_CURRENT_BAR:
      return {
        ...state,
        currentBar: action.payload,
      };

    case actionTypes.SET_CURRENT_BEAT:
      return {
        ...state,
        currentBeat: action.payload,
      };

    case actionTypes.UPDATE_BEAT:
      return { ...state };

    default:
      return state;
  }
};

export default songReducer;
