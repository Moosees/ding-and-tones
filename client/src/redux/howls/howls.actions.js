import { getAudioSrc } from '../../assets/sound/audioOptions';
import howlsTypes from './howls.types';

export const selectAudioSrc = (audioOption) => (dispatch, getState) => {
  const { scale } = getState();

  dispatch({
    type: howlsTypes.SELECT_AUDIO,
    payload: {
      audioSrc: getAudioSrc(audioOption),
      scale: scale.parsed.pitched,
    },
  });
};

const setVolume = (newVolume) => ({
  type: howlsTypes.SET_VOLUME,
  payload: { newVolume },
});

const updateHowlLoadingStatus = (note, status) => (dispatch) => {
  // console.log('updateHowlLoadingStatus', note, status);
  dispatch({
    type: howlsTypes.UPDATE_HOWL_LOADING_STATUS,
    payload: { note, status },
  });
};
