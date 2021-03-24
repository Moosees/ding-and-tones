import songTypes from '../song/song.types';
import { filterState } from '../store.utils';
import uiTypes from './ui.types';
import { updateMutedBars } from './ui.utils';

const INITIAL_STATE = {
  currentBar: null,
  currentBeat: null,
  countOpen: false,
  handsOpen: false,
  headersOpen: true,
  isEditingSong: true,
  isPreparingSong: false,
  isSongPlaying: false,
  multiSelect: false,
  mutedBars: {},
  privacyOpen: false,
  soundOptions: {
    percussive: [],
    single: [],
    nonScale: [],
  },
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

    case uiTypes.TOGGLE_COUNT_OPEN:
      return {
        ...state,
        countOpen: !state.countOpen,
      };

    case uiTypes.TOGGLE_EDIT_SONG:
      return {
        ...state,
        isEditingSong: !state.isEditingSong,
        mutedBars: {},
      };

    case uiTypes.TOGGLE_HEADERS_OPEN:
      return {
        ...state,
        headersOpen: !state.headersOpen,
      };

    case uiTypes.TOGGLE_HANDS_OPEN:
      return {
        ...state,
        handsOpen: !state.handsOpen,
      };

    case uiTypes.TOGGLE_MULTI_SELECT:
      return {
        ...state,
        multiSelect: !state.multiSelect,
      };

    case uiTypes.TOGGLE_MUTE_BAR:
      return {
        ...state,
        mutedBars: updateMutedBars(state.mutedBars, payload),
      };

    case songTypes.DELETE_BAR:
      return {
        ...state,
        mutedBars: filterState(state.mutedBars, payload.barToDelete),
      };

    case songTypes.FETCH_SUCCESSFUL:
      return { ...state, isEditingSong: false, mutedBars: {} };

    case songTypes.SET_STATE:
      return {
        ...state,
        isEditingSong: true,
        mutedBars: {},
      };

    case songTypes.UPDATE_HAND:
      return {
        ...state,
        handsOpen: true,
      };

    default:
      return state;
  }
};

export default uiReducer;
