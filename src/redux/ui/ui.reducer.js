import actionTypes from './ui.types';

const INITIAL_STATE = {
  currentBar: null,
  currentBeat: null,
  isSongPlaying: false,
  isEditingSong: true,
};

const uiReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CURRENT_BAR:
      return {
        ...state,
        currentBar: payload,
      };

    case actionTypes.SET_CURRENT_BEAT:
      return {
        ...state,
        currentBeat: payload,
      };

    case actionTypes.SET_IS_SONG_PLAYING:
      return {
        ...state,
        isSongPlaying: payload,
      };

    case actionTypes.TOGGLE_EDIT_SONG:
      return {
        ...state,
        isEditingSong: !state.isEditingSong,
      };

    default:
      return state;
  }
};

export default uiReducer;
