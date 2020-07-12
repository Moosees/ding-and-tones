import { beatsState } from '../song.initialState';
import actionTypes from '../song.types';

const beatsReducer = (state = beatsState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_BAR:
      return { ...state, ...payload.beats };

    case actionTypes.DUPLICATE_BAR:
      return { ...state, ...payload.newBeats };

    case actionTypes.DELETE_BAR:
      return state;

    case actionTypes.UPDATE_BEAT:
      return {
        ...state,
        [payload.beatId]: {
          ...state[payload.beatId],
          sound: payload.newSound,
        },
      };

    case actionTypes.UPDATE_MEASURE_AND_BEATS:
      return {
        ...state,
        ...payload.newBeats,
      };

    default:
      return state;
  }
};

export default beatsReducer;
