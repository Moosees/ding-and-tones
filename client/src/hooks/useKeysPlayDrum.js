import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { beatOptionToKeyCode } from '../assets/keyCodes';
import { setCurrentBeat } from '../redux/ui/ui.actions';
import useSound from './useSound';

const useKeysPlayDrum = () => {
  const dispatch = useDispatch();
  const { isSongPlaying, sounds } = useSelector(({ ui }) => ({
    isSongPlaying: ui.isSongPlaying,
    sounds: ui.soundOptions.allSounds,
  }));
  const [keypress, setKeypress] = useState(false);
  const { howlCbs, cleanup } = useSound();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isSongPlaying) dispatch(setCurrentBeat(null, null));
    }, 500);

    return () => clearTimeout(timeout);
  }, [dispatch, keypress, isSongPlaying]);

  useEffect(() => {
    console.log('load keys');
    const keyboardCbs = Object.keys(sounds || {}).reduce((acc, soundKey) => {
      const cbKey = beatOptionToKeyCode[soundKey];
      const cbFunc = () => {
        dispatch(setCurrentBeat(null, [soundKey]));
        setKeypress((keypress) => !keypress);
        new Audio(sounds[soundKey]).play();
      };

      return { ...acc, [cbKey]: cbFunc };
    }, {});

    howlCbs.forEach((howl) => (keyboardCbs[howl.key] = howl.play));

    const keyboardListener = (e) => {
      if (!keyboardCbs[e.keyCode]) return;
      keyboardCbs[e.keyCode]();
    };

    document.addEventListener('keydown', keyboardListener);

    return () => {
      console.log('unload keys');
      cleanup();
      document.removeEventListener('keydown', keyboardListener);
    };
  }, [dispatch, sounds, howlCbs, cleanup]);
};

export default useKeysPlayDrum;
