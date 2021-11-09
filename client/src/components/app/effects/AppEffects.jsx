import useDefaultState from './useDefaultState';
import useHowls from './useHowls';
import usePlayWithKeyboard from './usePlayWithKeyboard';
import useResetCurrentBeat from './useResetCurrentBeat';
import useSoundOptions from './useSoundOptions';

const AppEffects = () => {
  useDefaultState();
  useHowls();
  useSoundOptions();
  useResetCurrentBeat();
  usePlayWithKeyboard();

  return null;
};

export default AppEffects;
