import actionTypes from './search.types';
import { deleteFoundScale } from './search.utils';

const INITIAL_STATE = {
  scalesFound: null,
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.DELETE_FOUND_SCALE:
      const filteredScales = deleteFoundScale(payload, state);

      return {
        ...state,
        scalesFound: filteredScales,
      };

    case actionTypes.SET_SCALES_FOUND:
      return {
        ...state,
        scalesFound: payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
