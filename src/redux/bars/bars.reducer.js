import actionTypes from './bars.types';

const INITIAL_STATE = {
  bar_a: {
    timeSignature: '4/4',
    gridValue: 4,
    pattern: [
      { beatId: 'aa', sound: '1' },
      { beatId: 'ab', sound: '0' },
      { beatId: 'ac', sound: '1' },
      { beatId: 'ad', sound: '0' },
    ],
  },
  bar_b: {
    timeSignature: '4/4',
    gridValue: 4,
    pattern: [
      { beatId: 'ba', sound: '1' },
      { beatId: 'bb', sound: '0' },
      { beatId: 'bc', sound: '1' },
      { beatId: 'bd', sound: '1' },
    ],
  },
};

const barsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_BEAT:
      const barToUpdateBeatIn = { ...state[payload.barId] };
      barToUpdateBeatIn.pattern = barToUpdateBeatIn.pattern.map((beat) =>
        beat.beatId === payload.beatId ? { ...beat, sound: payload.value } : beat
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

    case actionTypes.ADD_NEW_BAR:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default barsReducer;
