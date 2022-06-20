import useDefaultState from './useDefaultState';
import usePlayWithKeyboard from './usePlayWithKeyboard';
import useResetCurrentBeat from './useResetCurrentBeat';

const AppEffects = () => {
  useDefaultState();
  useResetCurrentBeat();
  usePlayWithKeyboard();

  return null;
};

export default AppEffects;
