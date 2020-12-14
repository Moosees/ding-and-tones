import axios from 'axios';
import userTypes from './user.types';
import { getGoogleError, getMessageFromPopup } from './user.utils';

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

// export const signIn = (user) => (dispatch) => {
//   const idToken = user.getAuthResponse().id_token;
//   if (!idToken) return;

//   axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;

//   axios
//     .post('/signIn')
//     .then((res) => {
//       if (res.status === 200) {
//         const { name, anonymous, newUser } = res.data;
//         dispatch({
//           type: userTypes.SIGN_IN,
//           payload: {
//             alert: 'Signed in successfully!',
//             user: {
//               name,
//               isAnonymous: anonymous,
//               isSignedIn: user.isSignedIn(),
//               accountOpen: newUser,
//             },
//           },
//         });
//       }
//     })
//     .catch((error) => {
//       signOut();
//     });
// };

export const signIn = () => (dispatch) => {
  axios
    .get('/googleURL')
    .then((res) => {
      window.addEventListener('message', getMessageFromPopup);

      const height = Math.min(window.screen.height, 500);
      const top = window.screen.height / 2 - height / 2;
      const width = Math.min(window.screen.width, 440);
      const left = window.screen.width / 2 - width / 2;
      const win = window.open(
        res.data,
        'GoogleSignIn',
        `location=no,menubar=no,status=no,status=no,toolbar=no,height=${height},width=${width},top=${top},left=${left}`
      );

      if (win) win.opener = window;
    })
    .catch((error) => {
      console.log({ error });
    });
};

export const signOut = (error) => (dispatch) => {
  axios.defaults.headers.common['Authorization'] = 'Bearer undefined';

  if (error)
    return dispatch({
      type: userTypes.GOOGLE_ERROR,
      payload: { alert: getGoogleError(error) },
    });

  dispatch({
    type: userTypes.SIGN_OUT,
    payload: { alert: 'Signed out successfully!' },
  });
};

export const toggleAccount = () => ({
  type: userTypes.TOGGLE_ACCOUNT,
});
