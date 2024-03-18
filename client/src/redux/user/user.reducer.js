import userTypes from './user.types';

const INITIAL_STATE = {
  accountOpen: false,
  fetchSessionTried: false,
  name: '',
  isAnonymous: true,
  isSignedIn: false,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userTypes.SAVE_SUCCESSFUL:
      return {
        ...state,
        accountOpen: false,
        isAnonymous: payload.isAnonymous,
        name: payload.name,
      };

    case userTypes.SESSION_TRIED:
      return { ...state, fetchSessionTried: true };

    case userTypes.SIGN_IN:
      return {
        ...state,
        ...payload.user,
      };

    case userTypes.GOOGLE_ERROR:
    case userTypes.SIGN_OUT:
      return {
        ...state,
        name: '',
        isAnonymous: true,
        isSignedIn: false,
      };

    case userTypes.TOGGLE_ACCOUNT:
      return {
        ...state,
        accountOpen: !state.accountOpen,
      };

    default:
      return state;
  }
};

export default userReducer;
