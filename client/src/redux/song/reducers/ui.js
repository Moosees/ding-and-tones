import { uiState } from '../song.initialState';
import songTypes from '../song.types';

const uiReducer = (state = uiState, { type, payload }) => {
  switch (type) {
    // case songTypes.DELETE_ERROR:
    //   return { ...state, error: payload, isDeleting: false };
    // case songTypes.DELETE_STARTED:
    //   return { ...state, isDeleting: true };
    // case songTypes.DELETE_SUCCESSFUL:
    //   return { ...state, isDeleting: false };

    case songTypes.FETCH_ERROR:
      return { ...state, error: payload, isFetching: false };
    case songTypes.FETCH_STARTED:
      return { ...state, isFetching: true };
    case songTypes.FETCH_SUCCESSFUL:
      return { ...state, ...payload.ui, isFetching: false };

    case songTypes.SAVE_ERROR:
      return { ...state, error: payload, isSaving: false };
    case songTypes.SAVE_STARTED:
      return { ...state, isSaving: true };
    case songTypes.SAVE_SUCCESSFUL:
      return {
        ...state,
        isOwner: payload.isOwner,
        isSaving: false,
        songId: payload.songId,
      };

    case songTypes.SET_STATE:
      return { ...state, ...payload.ui };

    default:
      return state;
  }
};

export default uiReducer;
