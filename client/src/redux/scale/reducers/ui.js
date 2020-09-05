import songTypes from '../../song/song.types';
import { uiState } from '../scale.initialState';
import scaleTypes from '../scale.types';

const uiReducer = (state = uiState, { type, payload }) => {
  switch (type) {
    case scaleTypes.DELETE_ERROR:
      return { ...state, error: payload, isDeleting: false };
    case scaleTypes.DELETE_STARTED:
      return { ...state, isDeleting: true };
    case scaleTypes.DELETE_SUCCESSFUL:
      return { ...state, isDeleting: false };

    case scaleTypes.FETCH_ERROR:
      return { ...state, error: payload, isFetching: false };
    case scaleTypes.FETCH_NOT_FOUND:
      return { ...state, scaleId: null, isFetching: false };
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
      return { ...state, error: payload, isSaving: false };
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
      return payload.scale
        ? { ...state, isOwner: false, scaleId: null }
        : state;

    default:
      return state;
  }
};

export default uiReducer;
