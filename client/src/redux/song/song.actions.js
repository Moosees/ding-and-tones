import actionTypes from './song.types';

export const updateSongInfo = (songInfo) => ({
  type: actionTypes.UPDATE_SONG_INFO,
  payload: songInfo,
});
