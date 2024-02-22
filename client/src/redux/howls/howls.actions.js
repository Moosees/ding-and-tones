import axios from 'axios';
import { getAudioOption } from '../../assets/sound/audioOptions';
import howlsTypes from './howls.types';

export const saveUserSound = () => (dispatch, getState) => {
  const { howls, user } = getState();

  if (!user.isSignedIn) {
    return;
  }

  dispatch({ type: howlsTypes.SAVE_STARTED });

  const data = {
    audioOption: getAudioOption(howls.info.audioSrc),
    volume: howls.info.volume,
  };

  axios
    .post('/user/sound', data)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: howlsTypes.SAVE_SUCCESSFUL,
          payload: { alert: 'Sound setup saved' },
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: howlsTypes.SAVE_ERROR,
        payload: { alert: 'Could not save sound setup' },
      });
    });
};

export const selectSoundSource = (audioSrc) => (dispatch, getState) => {
  const { scale } = getState();

  dispatch({
    type: howlsTypes.SELECT_AUDIO,
    payload: { audioSrc, scale: scale.parsed.pitched },
  });
};

export const setVolume = (newVolume) => ({
  type: howlsTypes.SET_VOLUME,
  payload: { newVolume },
});

export const updateHowlLoadingStatus = (howl, status) => (dispatch) => {
  console.log('updateHowlLoadingStatus', howl, status);
  dispatch({
    type: howlsTypes.UPDATE_HOWL_LOADING_STATUS,
    payload: { howl, status },
  });
};
