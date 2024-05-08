import howlsTypes from '../howls/howls.types';
import { autoMoveOrderState } from '../song/song.initialState';
import songTypes from '../song/song.types';
import uiTypes from './ui.types';

const INITIAL_STATE = {
  autoMove: false,
  autoMoveOrder: autoMoveOrderState,
  currentBar: null,
  currentBeat: null,
  currentDropdown: null,
  currentHand: 1,
  currentSound: [],
  countOpen: false,
  handsOpen: false,
  headersOpen: true,
  isEditingSong: true,
  isSongPlaying: false,
  multiSelect: false,
  mutedBars: {},
  privacyOpen: false,
};

const uiReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case uiTypes.SET_CURRENT_DROPDOWN:
      return { ...state, currentDropdown: payload.beatId };

    case uiTypes.SET_CURRENTLY_PLAYING:
      const currentHand = payload.currentHand || 1;
      return {
        ...state,
        ...payload,
        currentHand,
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

    case uiTypes.TOGGLE_AUTO_MOVE:
      return {
        ...state,
        autoMove: !state.autoMove,
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

    case uiTypes.SET_MUTED_BARS:
      return {
        ...state,
        mutedBars: payload.mutedBars,
      };

    case howlsTypes.SELECT_AUDIO:
      return { ...state, isSongPlaying: false };

    case songTypes.UPDATE_MEASURE_AND_BEATS:
      return {
        ...state,
        autoMoveOrder: payload.ui.autoMoveOrder,
        currentDropdown: null,
      };

    case songTypes.FETCH_SUCCESSFUL:
      return {
        ...state,
        autoMoveOrder: payload.ui.autoMoveOrder,
        currentDropdown: null,
        isEditingSong: false,
        mutedBars: {},
      };

    case songTypes.SET_STATE:
      return {
        ...state,
        autoMoveOrder: payload.ui.autoMoveOrder,
        currentDropdown: null,
        isEditingSong: true,
        mutedBars: {},
      };

    default:
      return state;
  }
};

export default uiReducer;
