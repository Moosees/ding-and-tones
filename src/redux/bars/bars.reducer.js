import actionTypes from './bars.types';

const INITIAL_STATE = {
  bar_a: {
    timeSignature: '4/4',
    subdivision: 4,
    measure: [
      [{ beatId: 'aa', sound: '1' }],
      [{ beatId: 'ab', sound: '1' }],
      [{ beatId: 'ac', sound: '1' }],
      [{ beatId: 'ad', sound: '1' }],
    ],
  },
  bar_b: {
    timeSignature: '3/4',
    subdivision: 8,
    measure: [
      [
        { beatId: 'ba', sound: '0' },
        { beatId: 'bb', sound: '1' },
      ],
      [
        { beatId: 'bc', sound: '1' },
        { beatId: 'bd', sound: '0' },
      ],
      [
        { beatId: 'be', sound: '1' },
        { beatId: 'bf', sound: '1' },
      ],
    ],
  },
};

const barsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_BEAT:
      const barToUpdateBeatIn = { ...state[payload.barId] };
      barToUpdateBeatIn.measure[payload.beatIndex] = barToUpdateBeatIn.measure[
        payload.beatIndex
      ].map((part) =>
        part.beatId === payload.beatId
          ? { ...part, sound: payload.newSound }
          : part
      );

      return { ...state, [payload.barId]: barToUpdateBeatIn };

    case actionTypes.SET_BAR_TIME:
      const barToChangeTimeIn = { ...state[payload.barId] };
      barToChangeTimeIn.timeSignature = payload.timeSignature;

      return { ...state, [payload.barId]: barToChangeTimeIn };

    case actionTypes.SET_BAR_SUBDIVISION:
      const barToChangeGridIn = { ...state[payload.barId] };
      barToChangeGridIn.subdivision = payload.subdivision;

      return { ...state, [payload.barId]: barToChangeGridIn };

    case actionTypes.ADD_NEW_BAR:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default barsReducer;
