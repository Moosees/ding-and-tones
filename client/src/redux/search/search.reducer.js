import scaleTypes from '../scale/scale.types';
import songTypes from '../song/song.types';
import searchTypes from './search.types';

const INITIAL_STATE = {
  isSearching: false,
  scales: [],
  scalesFetchTried: false,
  songs: [],
  songsFetchTried: false,
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case scaleTypes.DELETE_SUCCESSFUL:
      return {
        ...state,
        scales: state.scales.filter(
          (scale) => scale.scaleId !== payload.scaleId
        ),
      };

    case songTypes.DELETE_SUCCESSFUL:
      return {
        ...state,
        songs: state.songs.filter((song) => song.songId !== payload.songId),
      };

    case scaleTypes.SAVE_SUCCESSFUL:
      return {
        ...state,
        scales: [payload.searchData, ...state.scales],
      };

    case songTypes.SAVE_SUCCESSFUL:
      const filteredSongs = state.songs.filter(
        (song) => song.songId !== payload.song.songId
      );
      return {
        ...state,
        songs: [payload.song, ...filteredSongs],
      };

    case searchTypes.SEARCH_ERROR:
      return {
        ...state,
        isSearching: false,
      };

    case searchTypes.SEARCH_NOT_FOUND:
      return {
        ...state,
        ...payload.extraPayload,
        isSearching: false,
      };

    case searchTypes.SEARCH_STARTED:
      return {
        ...state,
        isSearching: true,
      };

    case searchTypes.SEARCH_SUCCESSFUL:
      return {
        ...state,
        ...payload.results,
        ...payload.extraPayload,
        isSearching: false,
      };

    default:
      return state;
  }
};

export default searchReducer;
