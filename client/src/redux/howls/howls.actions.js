import { Howler } from 'howler';
import howlsTypes from './howls.types';
import { cleanupHowls } from './howls.utils';

export const cleanupAllHowls = () => (dispatch) => {
  // cleanupHowls();

  dispatch({ type: howlsTypes.CLEANUP_HOWLS });
};

export const selectSoundSource = (audioSrc) => ({
  type: howlsTypes.SELECT_AUDIO,
  payload: audioSrc,
});

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
