import { drumModeList } from '../../assets/intervals';
import drumTypes from './drum.types';

export const changeDrumMode = (direction = 1, currentDrumMode) => {
  const drumModeLength = drumModeList.length;
  const currentIndex = drumModeList.indexOf(currentDrumMode);

  let newPosition = currentIndex + direction;
  if (newPosition < 0) newPosition = drumModeLength - 1;
  else if (newPosition >= drumModeLength) newPosition = 0;

  return {
    type: drumTypes.SET_DRUM_MODE,
    payload: drumModeList[newPosition],
  };
};

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
