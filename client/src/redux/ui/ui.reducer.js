import uiTypes from './ui.types';

const INITIAL_STATE = {
  currentBar: null,
  currentBeat: null,
  dropdownBeatId: null,
  isEditingSong: true,
  isSongPlaying: false,
  options: {},
};

const uiReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case uiTypes.SET_CURRENT_BAR:
      return {
        ...state,
        currentBar: payload,
      };

    case uiTypes.SET_CURRENT_BEAT:
      return {
        ...state,
        currentBeat: payload,
      };

    case uiTypes.SET_DROPDOWN_BEAT_ID:
      return {
        ...state,
        dropdownBeatId: state.dropdownBeatId === payload ? null : payload,
      };

    case uiTypes.SET_IS_SONG_PLAYING:
      return {
        ...state,
        isSongPlaying: payload,
      };

    case uiTypes.SET_OPTIONS:
      return {
        ...state,
        options: payload,
      };

    case uiTypes.TOGGLE_EDIT_SONG:
      return {
        ...state,
        isEditingSong: !state.isEditingSong,
      };

    default:
      return state;
  }
};

export default uiReducer;
