import actionTypes from './search.types';

const INITIAL_STATE = {
  error: '',
  isFetching: false,
  scales: null,
  songs: null,
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.LOAD_SEARCH_RESULTS:
      return {
        ...state,
        ...payload,
        isFetching: false,
      };

    case actionTypes.SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        isFetching: true,
      };

    case actionTypes.SEARCH_STARTED:
      return {
        ...state,
        isFetching: true,
      };

    default:
      return state;
  }
};

export default searchReducer;
