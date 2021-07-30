import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { beatOptionToKeyCode } from '../assets/keyCodes';

const useKeysPlayDrum = () => {
  const sounds = useSelector(({ ui }) => ui.soundOptions.allSounds);

  useEffect(() => {
    const keyboardCbs = Object.keys(sounds || {}).reduce((acc, soundKey) => {
      const cbKey = beatOptionToKeyCode[soundKey];

      return { ...acc, [cbKey]: () => new Audio(sounds[soundKey]).play() };
    }, {});

    const keyboardListener = (e) => {
      if (!keyboardCbs[e.keyCode]) return;

      keyboardCbs[e.keyCode]();
    };

    document.addEventListener('keydown', keyboardListener);

    return () => document.removeEventListener('keydown', keyboardListener);
  }, [sounds]);
};

export default useKeysPlayDrum;
