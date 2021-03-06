import axios from 'axios';
import userTypes from './user.types';
import {
  getGoogleCode,
  getGoogleError,
  handleGooglePostMsg,
} from './user.utils';

export const checkSession = () => (dispatch, getState) => {
  dispatch({ type: userTypes.SESSION_STARTED });

  const {
    song: {
      ui: { songId },
    },
  } = getState();

  axios.post('/session', { songId }).then((res) => {
    if (res.status === 200 && res.data.user) {
      const { name, anonymous, isOwner } = res.data.user;

      dispatch({
        type: userTypes.SIGN_IN,
        payload: {
          alert: `Welcome back, ${name}`,
          song: { isOwner },
          user: {
            name,
            isAnonymous: anonymous,
            isSignedIn: true,
            accountOpen: false,
          },
        },
      });
    }
    dispatch({ type: userTypes.SESSION_SUCCESSFUL });
  });
};

export const saveUser = (newName, newAnon) => (dispatch, getState) => {
  dispatch({ type: userTypes.SAVE_STARTED });

  const {
    user: { name, isAnonymous },
  } = getState();

  if (name === newName && isAnonymous === newAnon)
    return dispatch({ type: userTypes.TOGGLE_ACCOUNT });

  axios
    .post('/user', { name: newName, anonymous: newAnon })
    .then((res) => {
      if (res.status === 200) {
        if (res.data.msg)
          return dispatch({
            type: userTypes.SAVE_ERROR,
            payload: { alert: res.data.msg },
          });

        dispatch({
          type: userTypes.SAVE_SUCCESSFUL,
          payload: {
            ...res.data,
            alert: 'Account updated successfully',
          },
        });
      }
    })
    .catch((error) =>
      dispatch({
        type: userTypes.SAVE_ERROR,
        payload: {
          alert: error.response
            ? error.response.data.msg
            : 'Account could not be updated',
        },
      })
    );
};

export const signIn = (songId) => (dispatch) => {
  axios
    .get('/googleURL')
    .then((res) => handleGooglePostMsg(res.data))
    .then((msg) => {
      const code = getGoogleCode(msg);
      return axios.post('/signIn', { code, songId });
    })
    .then((res) => {
      if (res.status === 200) {
        const { name, anonymous, newUser, isOwner } = res.data;

        dispatch({
          type: userTypes.SIGN_IN,
          payload: {
            alert: 'Signed in successfully!',
            song: { isOwner },
            user: {
              name,
              isAnonymous: anonymous,
              isSignedIn: true,
              accountOpen: newUser,
            },
          },
        });
      }
    })
    .catch((error) => {
      return dispatch({
        type: userTypes.GOOGLE_ERROR,
        payload: { alert: getGoogleError(error) },
      });
    });
};

export const signOut = () => (dispatch) => {
  axios
    .post('/signOut')
    .then((res) => {
      if (res.status === 200 && !res.data.msg) {
        dispatch({
          type: userTypes.SIGN_OUT,
          payload: { alert: 'Signed out successfully!' },
        });
      }
    })
    .catch((error) => {});
};

export const toggleAccount = () => ({
  type: userTypes.TOGGLE_ACCOUNT,
});
