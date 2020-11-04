import uiTypes from './ui.types';

export const setCurrentBar = (barId) => ({
  type: uiTypes.SET_CURRENT_BAR,
  payload: barId,
});

export const setCurrentBeat = (beatId) => ({
  type: uiTypes.SET_CURRENT_BEAT,
  payload: beatId,
});

export const setDropdownForBeat = (beatId) => ({
  type: uiTypes.SET_DROPDOWN_BEAT_ID,
  payload: beatId,
});

export const setIsPreparingSong = (isPreparingSong) => ({
  type: uiTypes.SET_IS_PREPARING_SONG,
  payload: isPreparingSong,
});

export const setIsSongPlaying = (isSongPlaying) => ({
  type: uiTypes.SET_IS_SONG_PLAYING,
  payload: isSongPlaying,
});

export const setPrivacyOpen = (privacyOpen) => ({
  type: uiTypes.SET_PRIVACY_OPEN,
  payload: privacyOpen,
});

export const setSoundOptions = (scale) => (dispatch) => {
  const options = {
    single: [
      // { label: 'Pause', value: '-' },
      { label: 'Loud Tak', value: 'T' },
      { label: 'Soft Tak', value: 't' },
    ],
  };

  scale.forEach((note, i) => {
    options.single.push({
      label: `${i} - ${note}`,
      value: `${i}`,
    });
  });

  dispatch({ type: uiTypes.SET_SOUND_OPTIONS, payload: options });
};

export const toggleEditSong = () => ({
  type: uiTypes.TOGGLE_EDIT_SONG,
});
