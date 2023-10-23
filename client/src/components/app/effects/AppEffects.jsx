import useDefaultState from './useDefaultState';
import useKeyboardForDropdown from './useKeyboardForDropdown';
import usePlayWithKeyboard from './usePlayWithKeyboard';
import useResetCurrentBeat from './useResetCurrentBeat';
import useSongIsPlaying from './useSongIsPlaying';

const AppEffects = () => {
  useDefaultState();
  useResetCurrentBeat();
  usePlayWithKeyboard();
  useSongIsPlaying();
  useKeyboardForDropdown();

  return null;
};

export default AppEffects;
