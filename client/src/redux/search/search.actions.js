import axios from 'axios';
import searchTypes from './search.types';
import searchOptions from './search.options';

export const startSearch = (searchOption) => (dispatch) => {
  dispatch({ type: searchTypes.SEARCH_STARTED });

  let searchTerm = '';
  let extraPayload = {};

  switch (searchOption) {
    case searchOptions.scales.latest:
      extraPayload = { scalesFetchTried: true };
      searchTerm = '/scale';
      break;

    case searchOptions.songs.latest:
      extraPayload = { songsFetchTried: true };
      searchTerm = '/song';
      break;

    default:
      return;
  }

  return axios
    .get(searchTerm)
    .then((res) => {
      if (res.status === 200)
        dispatch({
          type: searchTypes.SEARCH_SUCCESSFUL,
          payload: { ...res.data, ...extraPayload },
        });
    })
    .catch((error) => {
      dispatch({ type: searchTypes.SEARCH_ERROR, payload: error.message });
    });
};
