import axios from 'axios';
import actionTypes from './search.types';

export const fetchDataFrom = (searchTerm) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_STARTED });

  return axios
    .get(searchTerm)
    .then((res) => {
      if (res.status === 200)
        dispatch({ type: actionTypes.ADD_SEARCH_RESULTS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: actionTypes.SEARCH_ERROR, payload: error })
    );
};
