import axios from 'axios';
import { Howler } from 'howler';
import { getAudioOption } from '../../assets/sound/audioOptions';
import howlsTypes from './howls.types';

export const saveUserSound = () => (dispatch, getState) => {
  dispatch({ type: howlsTypes.SAVE_STARTED });

  const { howls } = getState();

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
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: howlsTypes.SAVE_ERROR,
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

export const setVolume = (newVolume) => (dispatch) => {
  Howler.volume(newVolume);

  dispatch({
    type: howlsTypes.SET_VOLUME,
    payload: { newVolume },
  });
};

export const updateHowlLoadingStatus = (howl, status) => ({
  type: howlsTypes.UPDATE_HOWL_LOADING_STATUS,
  payload: { howl, status },
});
