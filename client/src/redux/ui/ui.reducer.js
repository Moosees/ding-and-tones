import scaleTypes from '../scale/scale.types';
import songTypes from '../song/song.types';
import { filterState } from '../store.utils';
import uiTypes from './ui.types';
import { getBarMetreOffset } from './ui.utils';

const INITIAL_STATE = {
  addExtraNotes: false,
  barMetreOffset: 0,
  currentBar: null,
  currentBeat: null,
  currentHand: 1,
  currentSound: [],
  countOpen: false,
  handsOpen: false,
  headersOpen: true,
  isEditingExtraPos: false,
  isEditingSong: true,
  isPreparingSong: false,
  isSongPlaying: false,
  multiSelect: false,
  mutedBars: {},
  privacyOpen: false,
  soundOptions: {
    percussive: [],
    round: [],
    extra: [],
    nonScale: [],
  },
};

const uiReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case uiTypes.SET_CURRENTLY_PLAYING:
      const currentHand = payload.currentHand || 1;
      return {
        ...state,
        ...payload,
        currentHand,
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

    case uiTypes.TOGGLE_COUNT_OPEN: {
      const barMetreOffset = getBarMetreOffset({
        countOpen: !state.countOpen,
        handsOpen: state.handsOpen,
      });

      return {
        ...state,
        countOpen: !state.countOpen,
        barMetreOffset,
      };
    }

    case uiTypes.TOGGLE_EDIT_SONG:
      return {
        ...state,
        isEditingSong: !state.isEditingSong,
        mutedBars: {},
      };

    case uiTypes.TOGGLE_EXTRA_POS_EDIT:
      return {
        ...state,
        isEditingExtraPos: !state.isEditingExtraPos,
      };

    case uiTypes.TOGGLE_EXTRA_NOTES:
      return {
        ...state,
        addExtraNotes: !state.addExtraNotes,
      };

    case uiTypes.TOGGLE_HEADERS_OPEN:
      return {
        ...state,
        headersOpen: !state.headersOpen,
      };

    case uiTypes.TOGGLE_HANDS_OPEN: {
      const barMetreOffset = getBarMetreOffset({
        countOpen: state.countOpen,
        handsOpen: !state.handsOpen,
      });

      return {
        ...state,
        handsOpen: !state.handsOpen,
        barMetreOffset,
      };
    }

    case uiTypes.TOGGLE_MULTI_SELECT:
      return {
        ...state,
        multiSelect: !state.multiSelect,
      };

    case uiTypes.SET_MUTED_BARS:
      return { ...state, mutedBars: payload };

    case scaleTypes.LOAD_SCALE:
      return { ...state, isEditingExtraPos: false };

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

    case songTypes.UPDATE_HAND: {
      const barMetreOffset = getBarMetreOffset({
        countOpen: state.countOpen,
        handsOpen: true,
      });

      return {
        ...state,
        handsOpen: true,
        barMetreOffset,
      };
    }

    default:
      return state;
  }
};

export default uiReducer;
