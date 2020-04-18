import actionTypes from './bars.types';

const INITIAL_STATE = {
  bar_a: {
    metre: 's44',
    subdivision: 4,
    lengthInBeats: 4,
    measure: [
      [{ beatId: 'aa', sound: '1' }],
      [{ beatId: 'ab', sound: '1' }],
      [{ beatId: 'ac', sound: '1' }],
      [{ beatId: 'ad', sound: '1' }],
    ],
  },
  bar_b: {
    metre: 's34',
    subdivision: 8,
    lengthInBeats: 3,
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
  bar_c: {
    metre: 'x332',
    subdivision: 8,
    lengthInBeats: 4,
    measure: [
      [
        { beatId: 'ca', sound: '1' },
        { beatId: 'cb', sound: '0' },
        { beatId: 'cc', sound: '0' },
      ],
      [
        { beatId: 'cd', sound: '1' },
        { beatId: 'ce', sound: '0' },
        { beatId: 'cf', sound: '0' },
      ],
      [
        { beatId: 'cg', sound: '1' },
        { beatId: 'ch', sound: '0' },
      ],
    ],
  },
  bar_d: {
    metre: 'c68',
    subdivision: 8,
    lengthInBeats: 3,
    measure: [
      [
        { beatId: 'da', sound: '1' },
        { beatId: 'db', sound: '0' },
        { beatId: 'dc', sound: '0' },
      ],
      [
        { beatId: 'dd', sound: '1' },
        { beatId: 'de', sound: '0' },
        { beatId: 'df', sound: '0' },
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

    case actionTypes.SET_BAR_METRE:
      const barToChangeMetreIn = { ...state[payload.barId] };
      barToChangeMetreIn.metre = payload.newMetre;
      barToChangeMetreIn.lengthInBeats = payload.newLengthInBeats;

      return { ...state, [payload.barId]: barToChangeMetreIn };

    case actionTypes.SET_BAR_SUBDIVISION:
      const barToChangeGridIn = { ...state[payload.barId] };
      barToChangeGridIn.subdivision = payload.newSubdivision;

      return { ...state, [payload.barId]: barToChangeGridIn };

    case actionTypes.ADD_NEW_BAR:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default barsReducer;
