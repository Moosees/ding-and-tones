import actionTypes from './user.types';

export const signIn = (user, isSignedIn, newUser) => ({
  type: actionTypes.SIGN_IN,
  payload: { user, isSignedIn, newUser },
});

export const signOut = () => ({
  type: actionTypes.SIGN_OUT,
});
