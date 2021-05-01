import axios from 'axios';
import searchOptions from './search.options';
import searchTypes from './search.types';

export const startSearch = (searchOption, searchTerm = '') => (
  dispatch,
  getState
) => {
  const {
    search: { scalesFetchTried, songsFetchTried },
  } = getState();

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

    case searchOptions.scales.me:
      query = '/scale/me';
      break;

    case searchOptions.songs.alphabetical:
      query = `/song/a/${searchTerm}`;
      break;

    case searchOptions.songs.latest:
      extraPayload = { songsFetchTried: true };
      query = '/song';
      break;

    case searchOptions.songs.me:
      query = '/song/me';
      break;

    default:
      return;
  }

  axios
    .get(query)
    .then((res) => {
      if (res.status === 200)
        return dispatch({
          type: searchTypes.SEARCH_SUCCESSFUL,
          payload: { results: res.data, extraPayload },
        });
      if (res.status === 204) {
        let alert = 'No results found';
        
        if (
          (searchOption === searchOptions.scales.latest && !scalesFetchTried) ||
          (searchOption === searchOptions.songs.latest && !songsFetchTried)
        ) {
          alert = '';
        }

        dispatch({
          type: searchTypes.SEARCH_NOT_FOUND,
          payload: { extraPayload, alert },
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: searchTypes.SEARCH_ERROR,
        payload: {
          alert: error.response ? error.response.data.msg : 'Search failed',
        },
      });
    });
};
