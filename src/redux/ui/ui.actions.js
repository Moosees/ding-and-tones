import actionTypes from './ui.types';

export const setCurrentBar = (barId) => ({
  type: actionTypes.SET_CURRENT_BAR,
  payload: barId,
});

export const setCurrentBeat = (beatId) => ({
  type: actionTypes.SET_CURRENT_BEAT,
  payload: beatId,
});

export const setIsSongPlaying = (isSongPlaying) => ({
  type: actionTypes.SET_IS_SONG_PLAYING,
  payload: isSongPlaying,
});

export const setOptions = (options) => ({
  type: actionTypes.SET_OPTIONS,
  payload: options,
});

export const toggleEditSong = () => ({
  type: actionTypes.TOGGLE_EDIT_SONG,
});
