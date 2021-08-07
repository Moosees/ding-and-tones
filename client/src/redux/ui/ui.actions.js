import uiTypes from './ui.types';

export const setCurrentBar = (barId) => ({
  type: uiTypes.SET_CURRENT_BAR,
  payload: barId,
});

export const setCurrentBeat = (beatId, sound) => ({
  type: uiTypes.SET_CURRENT_BEAT,
  payload: { beatId, sound },
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

export const setSoundOptions =
  (scaleRound, scaleExtra) => (dispatch, getState) => {
    const {
      drum: { audioPath },
      song: { beats },
    } = getState();

    const allOptions = ['T', 't', '-'];
    const allSounds = { T: '/audio/takLoud.mp3', t: '/audio/takSoft.mp3' };

    const round = scaleRound.map((note, i) => {
      allOptions.push(`${i}`);
      allSounds[i] = `${audioPath}/${note}.mp3`;
      return {
        label: `${i} - ${note}`,
        value: `${i}`,
      };
    });

    const extra = scaleExtra.map(({ note }, i) => {
      allOptions.push(`b${i + 1}`);
      allSounds[`b${i + 1}`] = `${audioPath}/${note}.mp3`;
      return {
        label: `b${i + 1} - ${note}`,
        value: `b${i + 1}`,
      };
    });

    const percussive = [
      // { label: 'Pause', value: '-' },
      { label: 'Loud Tak', value: 'T' },
      { label: 'Soft Tak', value: 't' },
    ];

    const nonScale = [];
    const nonScaleMap = {};

    Object.values(beats).forEach(({ sound }) => {
      sound.forEach((option) => {
        if (!allOptions.includes(option) && !nonScaleMap[option]) {
          nonScaleMap[option] = true;
          nonScale.push({
            label: `${option} - ?`,
            value: option,
            outsideScale: true,
          });
        }
      });
    });

    dispatch({
      type: uiTypes.SET_SOUND_OPTIONS,
      payload: {
        allSounds,
        extra,
        nonScaleMap,
        nonScale,
        percussive,
        round,
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

export const toggleExtraPosEdit = () => ({
  type: uiTypes.TOGGLE_EXTRA_POS_EDIT,
});

export const toggleMuteBar = (barId) => ({
  type: uiTypes.TOGGLE_MUTE_BAR,
  payload: barId,
});
