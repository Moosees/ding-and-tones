import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { beatOptionToKeyCode } from '../assets/keyCodes';
import { setCurrentBeat } from '../redux/ui/ui.actions';

const useKeysPlayDrum = () => {
  const dispatch = useDispatch();
  const sounds = useSelector(({ ui }) => ui.soundOptions.allSounds);

  useEffect(() => {
    const keyboardCbs = Object.keys(sounds || {}).reduce((acc, soundKey) => {
      const cbKey = beatOptionToKeyCode[soundKey];
      const cbFunc = () => {
        dispatch(setCurrentBeat(null, soundKey));
        new Audio(sounds[soundKey]).play();
      };

      return { ...acc, [cbKey]: cbFunc };
    }, {});

    const keyboardListener = (e) => {
      if (!keyboardCbs[e.keyCode]) return;

      keyboardCbs[e.keyCode]();
    };

    document.addEventListener('keydown', keyboardListener);

    return () => document.removeEventListener('keydown', keyboardListener);
  }, [dispatch, sounds]);
};

export default useKeysPlayDrum;
