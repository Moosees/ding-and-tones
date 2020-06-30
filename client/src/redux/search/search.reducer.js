import actionTypes from './search.types';

const INITIAL_STATE = {
  scalesFound: [],
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
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
