import { filterState } from '../../store.utils';
import { barsState } from '../song.initialState';
import songTypes from '../song.types';

const barsReducer = (state = barsState, { type, payload }) => {
  switch (type) {
    case songTypes.ADD_NEW_BAR:
      return { ...state, [payload.barId]: payload.bar };

    case songTypes.DELETE_BAR:
      return filterState(state, [payload.barToDelete]);

    case songTypes.DUPLICATE_BAR:
      const oldBar = state[payload.oldBarId];
      return {
        ...state,
        [payload.newBarId]: { ...oldBar, measure: payload.newMeasure },
      };

    case songTypes.FETCH_SUCCESSFUL:
    case songTypes.SET_STATE:
      return payload.bars || state;

    case songTypes.UPDATE_BAR_SUBDIVISION:
      return {
        ...state,
        [payload.barId]: {
          ...state[payload.barId],
          subdivision: payload.newSubdivision,
        },
      };

    case songTypes.UPDATE_MEASURE_AND_BEATS:
      console.log('UPDATE_MEASURE_AND_BEATS', { payload });
      return {
        ...state,
        [payload.barId]: {
          ...state[payload.barId],
          measure: payload.measure,
        },
      };

    default:
      return state;
  }
};

export default barsReducer;
