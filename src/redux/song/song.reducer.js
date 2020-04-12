import actionTypes from './song.types';

const INITIAL_STATE = {
  bars: [
    { bar: 'bar_a', id: 'bar_1' },
    { bar: 'bar_a', id: 'bar_2' },
    { bar: 'bar_a', id: 'bar_3' },
    { bar: 'bar_b', id: 'bar_4' },
  ],
  bpm: 100,
  timeSignature: '4/4',
  gridValue: 4,
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

    case actionTypes.SET_SONG_TIME:
      return {
        ...state,
        timeSignature: payload,
      };

    case actionTypes.SET_SONG_GRID:
      return {
        ...state,
        gridValue: payload,
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
        bars: [...state.bars, payload],
      };

    default:
      return state;
  }
};

export default songReducer;
