import actionTypes from '../song.types';
import { barsState } from '../song.initialState';

const barsReducer = (state = barsState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_BAR:
      return { ...state, [payload.barId]: payload.bar };

    case actionTypes.DUPLICATE_BAR:
      const oldBar = state[payload.oldBarId];
      return {
        ...state,
        [payload.newBarId]: { ...oldBar, measure: payload.newMeasure },
      };

    case actionTypes.UPDATE_BAR_SUBDIVISION:
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

    case actionTypes.UPDATE_SONG:
      return payload.bars || state;

    default:
      return state;
  }
};

export default barsReducer;
