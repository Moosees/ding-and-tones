import songTypes from '../../song/song.types';
import userTypes from '../../user/user.types';
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
        positionMap: payload.positionMap,
      };

    case scaleTypes.LOAD_SCALE:
      return {
        ...state,
        hasChanges: false,
        isOwner: payload.isOwner,
        scaleId: payload.scaleId,
        positionMap: payload.positionMap,
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
        positionMap: payload.newPositionMap,
        hasChanges: true,
        isOwner: false,
        scaleId: null,
      };

    case songTypes.FETCH_SUCCESSFUL: {
      if (!payload.getScale) return state;

      return {
        ...state,
        hasChanges: false,
        isOwner: false,
        ...payload.scale.ui,
      };
    }

    case userTypes.SIGN_OUT:
      return { ...state, isOwner: false };

    default:
      return state;
  }
};

export default uiReducer;
