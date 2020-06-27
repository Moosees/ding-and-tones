import actionTypes from './user.types';

export const signIn = (user, isSignedIn) => ({
  type: actionTypes.SIGN_IN,
  payload: { user, isSignedIn },
});

export const signOut = () => ({
  type: actionTypes.SIGN_OUT,
});
