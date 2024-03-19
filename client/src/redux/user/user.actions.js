import axios from 'axios';
import { getAudioOption, getAudioSrc } from '../../assets/sound/audioOptions';
import howlsTypes from '../howls/howls.types';
import userTypes from './user.types';
import {
  getGoogleCode,
  getGoogleError,
  handleGooglePostMsg,
} from './user.utils';
import alertTypes from '../alert/alert.types';

export const signIn = (songId, persistSession) => (dispatch, getState) => {
  const { howls, scale } = getState();

  axios
    .get('/googleURL')
    .then((res) => handleGooglePostMsg(res.data))
    .then((msg) => {
      const code = getGoogleCode(msg);
      return axios.post('/signIn', { code, songId, persistSession });
    })
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        const { sound, name, anonymous, newUser, isOwner } = res.data;

        const audioSrc = getAudioSrc(sound.audioOption);

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

        if (howls.info.volume !== sound.volume) {
          dispatch({
            type: howlsTypes.SET_VOLUME,
            payload: { newVolume: sound.volume },
          });
        }

        if (getAudioOption(howls.info.audioSrc) !== sound.audioOption) {
          dispatch({
            type: howlsTypes.SELECT_AUDIO,
            payload: {
              audioSrc,
              scale: scale.parsed.pitched,
            },
          });
        }
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
      if (res.status === 200) {
        return dispatch({
          type: userTypes.SIGN_OUT,
          payload: { alert: 'Signed out successfully!' },
        });
      }

      dispatch({
        type: alertTypes.CREATE_ALERT,
        payload: { alert: 'Sign out failed' },
      });
    })
    .catch((error) => {
      dispatch({
        type: alertTypes.CREATE_ALERT,
        payload: { alert: 'Sign out failed' },
      });
    });
};
