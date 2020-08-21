import axios from 'axios';
import userTypes from './user.types';

export const saveUser = (newName) => (dispatch, getState) => {
  dispatch({ type: userTypes.SAVE_STARTED });

  const {
    user: { name },
  } = getState();

  if (name === newName) return dispatch({ type: userTypes.TOGGLE_ACCOUNT });

  return axios
    .post('/user', { name: newName })
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: userTypes.SAVE_SUCCESSFUL,
          payload: {
            ...res.data,
            alert: 'Account successfully saved',
          },
        });
      }
    })
    .catch((error) =>
      dispatch({ type: userTypes.SAVE_ERROR, payload: error.message })
    );
};

export const signIn = (name, isSignedIn, accountOpen) => ({
  type: userTypes.SIGN_IN,
  payload: { name, isSignedIn, accountOpen },
});

export const signOut = () => ({
  type: userTypes.SIGN_OUT,
});

export const toggleAccount = () => ({
  type: userTypes.TOGGLE_ACCOUNT,
});
