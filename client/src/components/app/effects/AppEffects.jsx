import useDefaultState from './useDefaultState';
import usePlayWithKeyboard from './usePlayWithKeyboard';
import useResetCurrentBeat from './useResetCurrentBeat';
import useSoundOptions from './useSoundOptions';

const AppEffects = () => {
  useDefaultState();
  useSoundOptions();
  useResetCurrentBeat();
  usePlayWithKeyboard();

  return null;
};

export default AppEffects;
