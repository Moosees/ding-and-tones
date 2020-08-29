import axios from 'axios';
import searchTypes from './search.types';
import searchOptions from './search.options';

export const startSearch = (searchOption, searchTerm = '') => (dispatch) => {
  dispatch({ type: searchTypes.SEARCH_STARTED });

  let query = '';
  let extraPayload = {};

  switch (searchOption) {
    case searchOptions.scales.alphabetical:
      query = `/scale/a/${searchTerm}`;
      break;

    case searchOptions.scales.latest:
      extraPayload = { scalesFetchTried: true };
      query = '/scale';
      break;

    case searchOptions.songs.alphabetical:
      query = `/song/a/${searchTerm}`;
      break;

    case searchOptions.songs.latest:
      extraPayload = { songsFetchTried: true };
      query = '/song';
      break;

    default:
      return;
  }

  return axios
    .get(query)
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
