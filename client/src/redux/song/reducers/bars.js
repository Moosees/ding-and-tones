import { filterObjectByKeyArray } from '../../store.utils';
import { barsState } from '../song.initialState';
import songTypes from '../song.types';

const barsReducer = (state = barsState, { type, payload }) => {
  switch (type) {
    case songTypes.DELETE_BAR:
      return filterObjectByKeyArray(state, [payload.song.barToDelete], true);

    case songTypes.DUPLICATE_BAR:
      return {
        ...state,
        [payload.song.newBarId]: payload.song.newBar,
      };

    case songTypes.FETCH_SUCCESSFUL:
    case songTypes.SET_STATE:
      return payload.song.bars || state;

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
        [payload.song.barId]: {
          ...state[payload.song.barId],
          measure: payload.song.newMeasure,
        },
      };

    default:
      return state;
  }
};

export default barsReducer;
