import useDefaultState from './useDefaultState';
import usePlayWithKeyboard from './usePlayWithKeyboard';
import useResetCurrentBeat from './useResetCurrentBeat';
import useSongIsPlaying from './useSongIsPlaying';

const AppEffects = () => {
  useDefaultState();
  useResetCurrentBeat();
  usePlayWithKeyboard();
  useSongIsPlaying();

  return null;
};

export default AppEffects;
