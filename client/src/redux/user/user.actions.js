import axios from 'axios';
import userTypes from './user.types';

export const clearNewUser = () => ({
  type: userTypes.CLEAR_NEW_USER,
});

export const saveUser = (newName) => (dispatch, getState) => {
  dispatch({ type: userTypes.SAVE_STARTED });

  const {
    user: { name },
  } = getState();

  if (name === newName) return;

  return axios
    .post('/user', { name: newName })
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
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

export const signIn = (user, isSignedIn) => ({
  type: userTypes.SIGN_IN,
  payload: { user, isSignedIn },
});

export const signOut = () => ({
  type: userTypes.SIGN_OUT,
});
