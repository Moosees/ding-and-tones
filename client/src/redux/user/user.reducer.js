import actionTypes from './user.types';

const INITIAL_STATE = {
  name: null,
  isSignedIn: false,
  newUser: false,
  signInTried: false,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_IN:
      return {
        ...state,
        ...payload.user,
        isSignedIn: payload.isSignedIn,
        signInTried: true,
      };

    case actionTypes.SIGN_OUT:
      return {
        ...state,
        user: null,
        isSignedIn: false,
        newUser: false,
        signInTried: true,
      };

    default:
      return state;
  }
};

export default userReducer;
