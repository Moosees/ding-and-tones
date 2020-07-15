import scaleTypes from '../scale/scale.types';
import searchTypes from './search.types';

const INITIAL_STATE = {
  error: '',
  isFetching: false,
  scales: null,
  songs: null,
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case searchTypes.LOAD_SEARCH_RESULTS:
      return {
        ...state,
        ...payload,
        isFetching: false,
      };

    case scaleTypes.SCALE_DELETE_SUCCESSFUL:
      return {
        ...state,
        scales: state.scales.filter(
          (scale) => scale.scaleId !== payload.scaleId
        ),
      };

    case searchTypes.SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        isFetching: true,
      };

    case searchTypes.SEARCH_STARTED:
      return {
        ...state,
        isFetching: true,
      };

    default:
      return state;
  }
};

export default searchReducer;
