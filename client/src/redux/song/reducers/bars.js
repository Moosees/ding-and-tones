import actionTypes from '../song.types';
import { barsState } from '../song.initialState';

const barsReducer = (state = barsState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_BAR:
      return { ...state, [payload.barId]: payload.barData };

    case actionTypes.DUPLICATE_BAR:
      const oldBar = state[payload.oldBarId];
      return {
        ...state,
        [payload.newBarId]: { ...oldBar, measure: payload.newMeasure },
      };

    case actionTypes.DELETE_BAR:
      return state;

    case actionTypes.SET_BAR_SUBDIVISION:
      return {
        ...state,
        [payload.barId]: {
          ...state[payload.barId],
          subdivision: payload.newSubdivision,
        },
      };

    case actionTypes.UPDATE_MEASURE_AND_BEATS:
      return {
        ...state,
        [payload.barId]: {
          ...state[payload.barId],
          measure: payload.newMeasure,
        },
      };

    default:
      return state;
  }
};

export default barsReducer;
