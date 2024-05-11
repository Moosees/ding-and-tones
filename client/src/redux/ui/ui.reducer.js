import howlsTypes from '../howls/howls.types';
import { autoMoveOrderState } from '../song/song.initialState';
import songTypes from '../song/song.types';
import uiTypes from './ui.types';

const INITIAL_STATE = {
  autoMove: false,
  autoMoveOrder: autoMoveOrderState,
  countOpen: false,
  handsOpen: false,
  headersOpen: true,
  isEditingSong: true,
  isSongPlaying: false,
  multiSelect: false,
  mutedBars: {},
};

const uiReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case uiTypes.SET_MUTED_BARS:
      return {
        ...state,
        mutedBars: payload.mutedBars,
      };

    case howlsTypes.SELECT_AUDIO:
      return { ...state, isSongPlaying: false };

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
