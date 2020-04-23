import INITIAL_STATE from './bars.initialState';
import actionTypes from './bars.types';

const barsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_BAR:
      return { ...state, ...payload };

    case actionTypes.SET_BAR_METRE:
      const barToChangeMetreIn = { ...state[payload.barId] };
      barToChangeMetreIn.metre = payload.newMetre;
      barToChangeMetreIn.lengthInBeats = payload.newLengthInBeats;

      return { ...state, [payload.barId]: barToChangeMetreIn };

    case actionTypes.SET_BAR_SUBDIVISION:
      const barToChangeGridIn = { ...state[payload.barId] };
      barToChangeGridIn.subdivision = payload.newSubdivision;

      return { ...state, [payload.barId]: barToChangeGridIn };

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

    default:
      return state;
  }
};

export default barsReducer;
