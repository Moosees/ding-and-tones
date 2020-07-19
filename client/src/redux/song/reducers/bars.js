import songTypes from '../song.types';
import { barsState } from '../song.initialState';

const barsReducer = (state = barsState, { type, payload }) => {
  switch (type) {
    case songTypes.ADD_NEW_BAR:
      return { ...state, [payload.barId]: payload.bar };

    case songTypes.DUPLICATE_BAR:
      const oldBar = state[payload.oldBarId];
      return {
        ...state,
        [payload.newBarId]: { ...oldBar, measure: payload.newMeasure },
      };

    case songTypes.UPDATE_BAR_SUBDIVISION:
      return {
        ...state,
        [payload.barId]: {
          ...state[payload.barId],
          subdivision: payload.newSubdivision,
        },
      };

    case songTypes.UPDATE_MEASURE:
      return {
        ...state,
        [payload.barId]: {
          ...state[payload.barId],
          measure: payload.newMeasure,
        },
      };

    case songTypes.UPDATE_SONG:
      return payload.bars || state;

    default:
      return state;
  }
};

export default barsReducer;
