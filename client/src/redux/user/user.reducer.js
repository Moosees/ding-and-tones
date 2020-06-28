import actionTypes from './user.types';

const INITIAL_STATE = {
  user: null,
  isSignedIn: false,
  newUser: false,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_IN:
      return {
        ...state,
        ...payload,
      };

    case actionTypes.SIGN_OUT:
      return {
        ...state,
        user: null,
        isSignedIn: false,
        newUser: false,
      };

    default:
      return state;
  }
};

export default userReducer;
