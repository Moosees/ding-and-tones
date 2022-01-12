import useDefaultState from './useDefaultState';
import useHowls from './useHowls';
import usePlayWithKeyboard from './usePlayWithKeyboard';
import useResetCurrentBeat from './useResetCurrentBeat';

const AppEffects = () => {
  useDefaultState();
  useHowls();
  useResetCurrentBeat();
  usePlayWithKeyboard();

  return null;
};

export default AppEffects;
