import uiTypes from './ui.types';

export const setCurrentBar = (barId) => ({
  type: uiTypes.SET_CURRENT_BAR,
  payload: barId,
});

export const setCurrentBeat = (beatId) => ({
  type: uiTypes.SET_CURRENT_BEAT,
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

export const setSoundOptions = (scale) => (dispatch, getState) => {
  const {
    song: { beats },
  } = getState();

  const single = scale.map((note, i) => ({
    label: `${i} - ${note}`,
    value: `${i}`,
  }));

  const percussive = [
    // { label: 'Pause', value: '-' },
    { label: 'Loud Tak', value: 'T' },
    { label: 'Soft Tak', value: 't' },
  ];

  const nonScale = [];
  const nonScaleMap = {};

  Object.values(beats).forEach(({ sound }) => {
    sound.forEach((option) => {
      const numericOption = Number(option);

      if (
        Number.isFinite(numericOption) &&
        numericOption >= single.length &&
        !nonScaleMap[numericOption]
      ) {
        nonScaleMap[numericOption] = true;
        nonScale.push({
          label: `${numericOption} - ?`,
          value: `${numericOption}`,
          outsideScale: true,
        });
      }
    });
  });

  dispatch({
    type: uiTypes.SET_SOUND_OPTIONS,
    payload: {
      numNotesInScale: single.length,
      single,
      percussive,
      nonScale,
    },
  });
};

export const toggleCountOpen = () => ({
  type: uiTypes.TOGGLE_COUNT_OPEN,
});

export const toggleEditSong = () => ({
  type: uiTypes.TOGGLE_EDIT_SONG,
});

export const toggleHeadersOpen = () => ({
  type: uiTypes.TOGGLE_HEADERS_OPEN,
});

export const toggleHandsOpen = () => ({
  type: uiTypes.TOGGLE_HANDS_OPEN,
});

export const toggleMultiSelect = () => ({
  type: uiTypes.TOGGLE_MULTI_SELECT,
});

export const toggleExtraNotes = () => ({
  type: uiTypes.TOGGLE_EXTRA_NOTES,
});

export const toggleMuteBar = (barId) => ({
  type: uiTypes.TOGGLE_MUTE_BAR,
  payload: barId,
});
