import actionTypes from './song.types';

const INITIAL_STATE = {
  bpm: 100,
  bars: [
    {
      timeSignature: '4/4',
      gridValue: 8,
      pattern: ['1', '', '', '', '1', '', '', '']
    },
    {
      timeSignature: '4/4',
      gridValue: 8,
      pattern: ['1', '', '', '', '1', '', '1', '']
    }
  ]
};

const songReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_BPM:
      return {
        ...state,
        bpm: action.payload
      };

    default:
      return state;
  }
};

export default songReducer;
