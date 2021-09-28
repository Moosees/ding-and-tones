import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHowls from '../../../hooks/useHowls';
import { setCurrentBeat } from '../../../redux/ui/ui.actions';

const Keyboard = () => {
  const dispatch = useDispatch();
  const { isSongPlaying } = useSelector(({ ui }) => ({
    isSongPlaying: ui.isSongPlaying,
    sounds: ui.soundOptions.allSounds,
  }));
  const { howlList } = useHowls();
  const [keypress, setKeypress] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isSongPlaying) dispatch(setCurrentBeat(null, null));
    }, 500);

    return () => clearTimeout(timeout);
  }, [dispatch, keypress, isSongPlaying]);

  useEffect(() => {
    console.log('load keys');
    const keyboardCbs = howlList?.length
      ? howlList.reduce((acc, howl) => {
          const { key, option, play } = howl;
          const cb = () => {
            dispatch(setCurrentBeat(null, [option]));
            setKeypress((keypress) => !keypress);
            play();
          };

          return { ...acc, [key]: cb };
        }, {})
      : {};

    const keyboardListener = (e) => {
      if (!keyboardCbs[e.keyCode]) return;
      keyboardCbs[e.keyCode]();
    };

    document.addEventListener('keydown', keyboardListener);

    return () => {
      console.log('unload keys');
      document.removeEventListener('keydown', keyboardListener);
    };
  }, [dispatch, howlList]);

  return null;
};

export default Keyboard;
