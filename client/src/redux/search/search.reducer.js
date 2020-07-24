import scaleTypes from '../scale/scale.types';
import searchTypes from './search.types';
import songTypes from '../song/song.types';

const INITIAL_STATE = {
  error: '',
  isSearching: false,
  scales: [],
  songs: [],
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
        scales: [payload, ...state.scales],
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
        error: payload,
        isSearching: true,
      };

    case searchTypes.SEARCH_STARTED:
      return {
        ...state,
        isSearching: true,
      };

    case searchTypes.SEARCH_SUCCESSFUL:
      return {
        ...state,
        ...payload,
        isSearching: false,
      };

    default:
      return state;
  }
};

export default searchReducer;
