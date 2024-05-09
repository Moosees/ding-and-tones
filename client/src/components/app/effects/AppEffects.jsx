import useDefaultState from './useDefaultState';
import useKeyboardForDropdown from './useKeyboardForDropdown';
import usePlayWithKeyboard from './usePlayWithKeyboard';
import useResetCurrentBeat from './useResetCurrentBeat';

const AppEffects = () => {
  useDefaultState();
  useResetCurrentBeat();
  usePlayWithKeyboard();
  useKeyboardForDropdown();

  return null;
};

export default AppEffects;
