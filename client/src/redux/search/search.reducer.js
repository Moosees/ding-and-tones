import scaleTypes from '../scale/scale.types';
import searchTypes from './search.types';

const INITIAL_STATE = {
  error: '',
  isSearching: false,
  scales: [],
  songs: [],
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case searchTypes.LOAD_SEARCH_RESULTS:
      return {
        ...state,
        ...payload,
        isSearching: false,
      };

    case scaleTypes.DELETE_SUCCESSFUL:
      return {
        ...state,
        scales: state.scales.filter(
          (scale) => scale.info.scaleId !== payload.scaleId
        ),
      };

    case scaleTypes.SAVE_SUCCESSFUL:
      return {
        ...state,
        scales: [...state.scales, payload],
      };

    case searchTypes.SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        isSearching: true,
      };

    case searchTypes.SEARCH_STARTED:
      return {
        ...state,
        isSearching: true,
      };

    default:
      return state;
  }
};

export default searchReducer;
