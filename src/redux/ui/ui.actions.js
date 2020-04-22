import actionTypes from './ui.types';

export const setCurrentBar = (arrangementId) => ({
  type: actionTypes.SET_CURRENT_BAR,
  payload: arrangementId,
});

export const setCurrentBeat = (beatId) => ({
  type: actionTypes.SET_CURRENT_BEAT,
  payload: beatId,
});

export const setIsSongPlaying = (isSongPlaying) => ({
  type: actionTypes.SET_IS_SONG_PLAYING,
  payload: isSongPlaying,
});

export const toggleEditSong = () => ({
  type: actionTypes.TOGGLE_EDIT_SONG,
});
