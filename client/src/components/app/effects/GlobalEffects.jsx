import usePlayWithKeyboard from './usePlayWithKeyboard';
import useResetCurrentBeat from './useResetCurrentBeat';
import useSoundOptions from './useSoundOptions';

const GlobalEffects = ({ children }) => {
  useSoundOptions();
  useResetCurrentBeat();
  usePlayWithKeyboard();

  return null;
};

export default GlobalEffects;
