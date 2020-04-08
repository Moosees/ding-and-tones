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
    case actionTypes.UPDATE_BEAT:
      const barToUpdate = { ...state[action.payload.barId] };
      barToUpdate.pattern = barToUpdate.pattern.map((beat) =>
        beat.id === action.payload.beatId
          ? { ...beat, tone: action.payload.value }
          : beat
      );

      return { ...state, [action.payload.barId]: barToUpdate };

    default:
      return state;
  }
};

export default barsReducer;
