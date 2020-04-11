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

const barsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_BEAT:
      const barToUpdateBeatIn = { ...state[payload.barId] };
      barToUpdateBeatIn.pattern = barToUpdateBeatIn.pattern.map((beat) =>
        beat.id === payload.beatId ? { ...beat, tone: payload.value } : beat
      );

      return { ...state, [payload.barId]: barToUpdateBeatIn };

    case actionTypes.SET_BAR_TIME:
      const barToChangeTimeIn = { ...state[payload.barId] };
      barToChangeTimeIn.timeSignature = payload.timeSignature;

      return { ...state, [payload.barId]: barToChangeTimeIn };

    case actionTypes.SET_BAR_GRID:
      const barToChangeGridIn = { ...state[payload.barId] };
      barToChangeGridIn.gridValue = payload.gridValue;

      return { ...state, [payload.barId]: barToChangeGridIn };

    default:
      return state;
  }
};

export default barsReducer;
