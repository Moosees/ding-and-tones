import drumTypes from './drum.types';

export const selectSoundSource = (audioPath) => ({
  type: drumTypes.SELECT_AUDIO,
  payload: audioPath,
});

export const setDisplayedChord = (chord) => ({
  type: drumTypes.SET_DISPLAYED_CHORD,
  payload: chord,
});

export const setDisplayedNote = (note) => ({
  type: drumTypes.SET_DISPLAYED_NOTE,
  payload: note,
});

export const setShowIntervals = (showIntervals) => ({
  type: drumTypes.SET_SHOW_INTERVALS,
  payload: showIntervals,
});
