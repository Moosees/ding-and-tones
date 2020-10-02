import userTypes from './user.types';

const INITIAL_STATE = {
  accountOpen: false,
  name: '',
  isSaving: false,
  isSignedIn: false,
  signInTried: false,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userTypes.SAVE_ERROR:
      return { ...state, isSaving: false };
    case userTypes.SAVE_STARTED:
      return { ...state, isSaving: true };
    case userTypes.SAVE_SUCCESSFUL:
      return {
        ...state,
        isSaving: false,
        accountOpen: false,
        name: payload.name,
      };

    case userTypes.SIGN_IN:
      return {
        ...state,
        ...payload,
        signInTried: true,
      };

    case userTypes.SIGN_OUT:
      return {
        ...state,
        name: '',
        isSignedIn: false,
        signInTried: true,
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
