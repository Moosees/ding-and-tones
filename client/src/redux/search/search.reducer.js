import actionTypes from './search.types';

const INITIAL_STATE = {
  error: '',
  isSearching: false,
  scales: null,
  songs: null,
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_SEARCH_RESULTS:
      return {
        ...state,
        ...payload,
        isSearching: false,
      };

    case actionTypes.SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        isSearching: true,
      };

    case actionTypes.SEARCH_STARTED:
      return {
        ...state,
        isSearching: true,
      };

    default:
      return state;
  }
};

export default searchReducer;
