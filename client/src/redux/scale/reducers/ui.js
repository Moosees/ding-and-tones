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
        isFetching: false,
        isOwner: payload.isOwner,
        scaleId: payload.scaleId,
      };

    case scaleTypes.LOAD_SCALE:
      return { ...state, isOwner: payload.isOwner, scaleId: payload.scaleId };

    case scaleTypes.SAVE_ERROR:
      return { ...state, isSaving: false };
    case scaleTypes.SAVE_STARTED:
      return { ...state, isSaving: true };
    case scaleTypes.SAVE_SUCCESSFUL:
      return {
        ...state,
        isSaving: false,
        isOwner: payload.isOwner,
        scaleId: payload.scaleId,
      };

    case songTypes.FETCH_SUCCESSFUL:
      return payload.getScale && payload.scale
        ? { ...state, isOwner: false, scaleId: null }
        : state;

    case userTypes.SIGN_OUT:
      return { ...state, isOwner: false };

    default:
      return state;
  }
};

export default uiReducer;
