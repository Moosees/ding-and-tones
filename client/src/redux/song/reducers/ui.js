import userTypes from '../../user/user.types';
import { uiState } from '../song.initialState';
import songTypes from '../song.types';

const uiReducer = (state = uiState, { type, payload }) => {
  switch (type) {
    case songTypes.DELETE_ERROR:
      return { ...state, isDeleting: false };
    case songTypes.DELETE_STARTED:
      return { ...state, isDeleting: true };
    case songTypes.DELETE_SUCCESSFUL:
      return {
        ...state,
        isDeleting: false,
        isOwner: state.songId === payload.songId ? false : state.isOwner,
        songId: state.songId === payload.songId ? null : state.songId,
      };

    case songTypes.FETCH_ERROR:
      return { ...state, isFetching: false };
    case songTypes.FETCH_STARTED:
      return { ...state, isFetching: true };
    case songTypes.FETCH_SUCCESSFUL:
      return { ...state, ...payload.ui, isFetching: false };

    case songTypes.SAVE_ERROR:
      return { ...state, isSaving: false };
    case songTypes.SAVE_STARTED:
      return { ...state, isSaving: true };
    case songTypes.SAVE_SUCCESSFUL:
      return {
        ...state,
        composer: payload.song.composer,
        isOwner: payload.song.isOwner,
        isSaving: false,
        songId: payload.song.songId,
        scaleId: payload.song.scaleId,
        scaleName: payload.song.scaleName,
        scaleLabel: payload.song.scaleLabel,
      };

    case songTypes.SET_STATE:
      return { ...state, ...payload.ui };

    case userTypes.SIGN_IN:
      return { ...state, isOwner: payload.song.isOwner };

    case userTypes.SIGN_OUT:
      return { ...state, isOwner: false };

    default:
      return state;
  }
};

export default uiReducer;
