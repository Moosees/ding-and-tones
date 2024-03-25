import songTypes from '../../song/song.types';
import { uiState } from '../scale.initialState';
import scaleTypes from '../scale.types';

const uiReducer = (state = uiState, { type, payload }) => {
  switch (type) {
    case scaleTypes.DELETE_ERROR:
      return { ...state, isDeleting: false };
    case scaleTypes.DELETE_STARTED:
      return { ...state, isDeleting: true };
    case scaleTypes.DELETE_SUCCESSFUL:
      return {
        ...state,
        isDeleting: false,
        isOwner: state.scaleId === payload.scaleId ? false : state.isOwner,
        scaleId: state.scaleId === payload.scaleId ? null : state.scaleId,
      };

    case scaleTypes.FETCH_ERROR:
      return { ...state, isFetching: false };
    case scaleTypes.FETCH_STARTED:
      return { ...state, isFetching: true };
    case scaleTypes.FETCH_SUCCESSFUL:
      return {
        ...state,
        hasChanges: false,
        isFetching: false,
        isOwner: payload.isOwner,
        scaleId: payload.scaleId,
      };

    case scaleTypes.LOAD_SCALE:
      return {
        ...state,
        hasChanges: false,
        isOwner: payload.isOwner,
        scaleId: payload.scaleId,
      };

    case scaleTypes.SAVE_ERROR:
      return { ...state, isSaving: false };
    case scaleTypes.SAVE_STARTED:
      return { ...state, isSaving: true };
    case scaleTypes.SAVE_SUCCESSFUL:
      return {
        ...state,
        hasChanges: false,
        isSaving: false,
        isOwner: payload.isOwner,
        scaleId: payload.scaleId,
      };

    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        hasChanges: true,
        isOwner: false,
        scaleId: null,
      };

    case scaleTypes.NEW_SCALE:
      return {
        ...state,
        isOwner: false,
        scaleId: null,
        hasChanges: false,
      };

    case scaleTypes.ROTATE_DRUM:
    case scaleTypes.SET_NAME:
    case scaleTypes.TOGGLE_SHARPS:
      return { ...state, isOwner: false, scaleId: null, hasChanges: true };

    case songTypes.FETCH_SUCCESSFUL: {
      if (!payload.song.getScale) return state;

      return {
        ...state,
        hasChanges: false,
        isOwner: false,
        scaleId: payload.song.scale.scaleId,
      };
    }

    // case userTypes.SIGN_OUT:
    //   return { ...state, isOwner: false };

    default:
      return state;
  }
};

export default uiReducer;
