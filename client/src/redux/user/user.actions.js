import userTypes from './user.types';

export const clearNewUser = () => ({
  type: userTypes.CLEAR_NEW_USER,
});

export const signIn = (user, isSignedIn) => ({
  type: userTypes.SIGN_IN,
  payload: { user, isSignedIn },
});

export const signOut = () => ({
  type: userTypes.SIGN_OUT,
});
