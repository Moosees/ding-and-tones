import actionTypes from './bars.types';

const INITIAL_STATE = {
  bar_a: {
    metre: 's44',
    subdivision: 4,
    lengthInBeats: 4,
    measure: [
      [{ beatId: 'aa', sound: '0' }],
      [{ beatId: 'ab', sound: '0' }],
      [{ beatId: 'ac', sound: '0' }],
      [{ beatId: 'ad', sound: '0' }],
    ],
  },
  bar_b: {
    metre: 's34',
    subdivision: 8,
    lengthInBeats: 3,
    measure: [
      [
        { beatId: 'ba', sound: '' },
        { beatId: 'bb', sound: '0' },
      ],
      [
        { beatId: 'bc', sound: '0' },
        { beatId: 'bd', sound: '' },
      ],
      [
        { beatId: 'be', sound: '0' },
        { beatId: 'bf', sound: '0' },
      ],
    ],
  },
  bar_c: {
    metre: 'x332',
    subdivision: 8,
    lengthInBeats: 4,
    measure: [
      [
        { beatId: 'ca', sound: '0' },
        { beatId: 'cb', sound: '' },
        { beatId: 'cc', sound: '' },
      ],
      [
        { beatId: 'cd', sound: '0' },
        { beatId: 'ce', sound: '' },
        { beatId: 'cf', sound: '' },
      ],
      [
        { beatId: 'cg', sound: '0' },
        { beatId: 'ch', sound: '' },
      ],
    ],
  },
  bar_d: {
    metre: 'c68',
    subdivision: 8,
    lengthInBeats: 3,
    measure: [
      [
        { beatId: 'da', sound: '0' },
        { beatId: 'db', sound: '' },
        { beatId: 'dc', sound: '' },
      ],
      [
        { beatId: 'dd', sound: '0' },
        { beatId: 'de', sound: '' },
        { beatId: 'df', sound: '' },
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
