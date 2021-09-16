import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { beatOptionToKeyCode } from '../assets/keyCodes';
import { cleanupHowls, createHowls } from '../assets/sound/howler';
import { setCurrentBeat } from '../redux/ui/ui.actions';

const useKeysPlayDrum = () => {
  const dispatch = useDispatch();
  const { isSongPlaying, sounds } = useSelector(({ ui }) => ({
    isSongPlaying: ui.isSongPlaying,
    sounds: ui.soundOptions.allSounds,
  }));
  const [keypress, setKeypress] = useState(false);

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

    const { howlCbs } = createHowls();
    howlCbs.forEach((howl) => (keyboardCbs[howl.key] = howl.play));

    const keyboardListener = (e) => {
      if (!keyboardCbs[e.keyCode]) return;
      keyboardCbs[e.keyCode]();
    };

    document.addEventListener('keydown', keyboardListener);

    return () => {
      console.log('unload keys');
      cleanupHowls();
      document.removeEventListener('keydown', keyboardListener);
    };
  }, [dispatch, sounds]);
};

export default useKeysPlayDrum;
