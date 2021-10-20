import useDefaultState from './useDefaultState';
import usePlayWithKeyboard from './usePlayWithKeyboard';
import useResetCurrentBeat from './useResetCurrentBeat';
import useSoundOptions from './useSoundOptions';

const GlobalEffects = ({ children }) => {
  useDefaultState();
  useSoundOptions();
  useResetCurrentBeat();
  usePlayWithKeyboard();

  return null;
};

export default GlobalEffects;
