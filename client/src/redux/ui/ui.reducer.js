import songTypes from '../song/song.types';
import uiTypes from './ui.types';
import { updateMutedBars } from './ui.utils';

const INITIAL_STATE = {
  currentBar: null,
  currentBeat: null,
  dropdownBeatId: null,
  isEditingSong: true,
  isPreparingSong: false,
  isSongPlaying: false,
  mutedBars: {},
  privacyOpen: false,
  soundOptions: {
    percussive: [],
    single: [],
    nonScale: [],
  },
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
        mutedBars: {},
      };

    case uiTypes.TOGGLE_MUTE_BAR:
      return {
        ...state,
        mutedBars: updateMutedBars(state.mutedBars, payload),
      };

    case songTypes.SET_STATE:
      return {
        ...state,
        isEditingSong: true,
        mutedBars: {},
      };

    default:
      return state;
  }
};

export default uiReducer;
