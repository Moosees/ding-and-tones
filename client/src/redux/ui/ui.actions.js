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

export const setIsSongPlaying = (isSongPlaying) => ({
  type: uiTypes.SET_IS_SONG_PLAYING,
  payload: isSongPlaying,
});

export const setIsSaveable = (isSaveable) => ({
  type: uiTypes.SET_IS_SAVEABLE,
  payload: isSaveable,
});

export const setOptions = (options) => ({
  type: uiTypes.SET_OPTIONS,
  payload: options,
});

export const toggleEditSong = () => ({
  type: uiTypes.TOGGLE_EDIT_SONG,
});
