import { Howler } from 'howler';
import howlsTypes from './howls.types';
import { cleanupHowls, createHowls } from './howls.utils';

export const cleanupAllHowls = () => (dispatch) => {
  cleanupHowls();

  dispatch({ type: howlsTypes.CLEANUP_HOWLS });
};

export const createAllHowls = () => (dispatch) => {
  const howls = createHowls();

  dispatch({ type: howlsTypes.CREATE_HOWLS, payload: { howls } });
  return howls;
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

export const updateHowlLoadingStatus = (option, status) => ({
  type: howlsTypes.UPDATE_HOWL_LOADING_STATUS,
  payload: { option, status },
});
