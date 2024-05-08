import { barsState } from '../song.initialState';
import songTypes from '../song.types';

const barsReducer = (state = barsState, { type, payload }) => {
  switch (type) {
    case songTypes.FETCH_SUCCESSFUL:
    case songTypes.SET_STATE:
      return payload.song.bars || state;

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
