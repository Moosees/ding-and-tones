import axios from 'axios';
import searchTypes from './search.types';

export const fetchDataFrom = (searchTerm) => (dispatch) => {
  dispatch({ type: searchTypes.SEARCH_STARTED });

  return axios
    .get(searchTerm)
    .then((res) => {
      if (res.status === 200)
        dispatch({ type: searchTypes.LOAD_SEARCH_RESULTS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: searchTypes.SEARCH_ERROR, payload: error.message });
    });
};
