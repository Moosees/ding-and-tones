import actionTypes from './bars.types';

const INITIAL_STATE = {
  bar_a: {
    timeSignature: '4/4',
    gridValue: 4,
    pattern: [
      { id: 'aa', tone: '1' },
      { id: 'ab', tone: '0' },
      { id: 'ac', tone: '1' },
      { id: 'ad', tone: '0' },
    ],
  },
  bar_b: {
    timeSignature: '4/4',
    gridValue: 4,
    pattern: [
      { id: 'ba', tone: '1' },
      { id: 'bb', tone: '0' },
      { id: 'bc', tone: '1' },
      { id: 'bd', tone: '1' },
    ],
  },
};

const barsReducer = (state = INITIAL_STATE, action) => {
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

export default barsReducer;