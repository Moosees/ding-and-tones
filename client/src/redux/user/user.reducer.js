import userTypes from './user.types';

const INITIAL_STATE = {
  error: '',
  name: '',
  isSaving: false,
  isSignedIn: false,
  newUser: false,
  signInTried: false,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userTypes.CLEAR_NEW_USER:
      return {
        ...state,
        newUser: false,
      };

    case userTypes.SAVE_ERROR:
      return { ...state, error: payload, isSaving: false };
    case userTypes.SAVE_STARTED:
      return { ...state, isSaving: true };
    case userTypes.SAVE_SUCCESSFUL:
      console.log({payload});
      return {
        ...state,
        isSaving: false,
        newUser: false,
        name: payload.name,
      };

    case userTypes.SIGN_IN:
      return {
        ...state,
        ...payload.user,
        isSignedIn: payload.isSignedIn,
        signInTried: true,
      };

    case userTypes.SIGN_OUT:
      return {
        ...state,
        name: '',
        isSignedIn: false,
        newUser: false,
        signInTried: true,
      };

    default:
      return state;
  }
};

export default userReducer;
