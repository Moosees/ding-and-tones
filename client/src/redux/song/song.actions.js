import actionTypes from './song.types';

export const setBpm = (newBpm) => ({
  type: actionTypes.SET_BPM,
  payload: newBpm,
});

export const setSongDifficulty = (newDifficulty) => ({
  type: actionTypes.SET_SONG_DIFFICULTY,
  payload: newDifficulty,
});

export const setSongMetre = (newMetre) => ({
  type: actionTypes.SET_SONG_METRE,
  payload: newMetre,
});

export const setSongSubdivision = (newSubdivision) => ({
  type: actionTypes.SET_SONG_SUBDIVISION,
  payload: newSubdivision,
});

export const setSongTitle = (newTitle) => ({
  type: actionTypes.SET_SONG_TITLE,
  payload: newTitle,
});
