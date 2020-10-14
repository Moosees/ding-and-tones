import uiTypes from './ui.types';

const INITIAL_STATE = {
  currentBar: null,
  currentBeat: null,
  dropdownBeatId: null,
  isEditingSong: true,
  isPreparingSong: false,
  isSongPlaying: false,
  privacyOpen: false,
  soundOptions: {},
  textEditOpen: false,
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

    case uiTypes.SET_IS_PREPARING_SONG:
      return {
        ...state,
        isPreparingSong: payload,
      };

    case uiTypes.SET_IS_SONG_PLAYING:
      return {
        ...state,
        isSongPlaying: payload,
      };

    case uiTypes.SET_PRIVACY_OPEN:
      return {
        ...state,
        privacyOpen: payload,
      };

    case uiTypes.SET_SOUND_OPTIONS:
      return {
        ...state,
        soundOptions: payload,
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
