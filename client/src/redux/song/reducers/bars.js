import { filterState } from '../../store.utils';
import { barsState } from '../song.initialState';
import songTypes from '../song.types';

const barsReducer = (state = barsState, { type, payload }) => {
  switch (type) {
    case songTypes.ADD_NEW_BAR:
      return { ...state, [payload.song.barId]: payload.song.bar };

    case songTypes.DELETE_BAR:
      return filterState(state, [payload.barToDelete]);

    case songTypes.DUPLICATE_BAR:
      return {
        ...state,
        [payload.newBarId]: payload.newBar,
      };

    case songTypes.FETCH_SUCCESSFUL:
    case songTypes.SET_STATE:
      return payload.bars || state;

    case songTypes.UPDATE_BAR_SUBDIVISIONS:
      return {
        ...state,
        [payload.barId]: {
          ...state[payload.barId],
          subdivisions: payload.newSubdivisions,
        },
      };

    case songTypes.UPDATE_MEASURE_AND_BEATS:
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
