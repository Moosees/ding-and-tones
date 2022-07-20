import { Howler } from 'howler';
import howlsTypes from './howls.types';

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
