import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useHowls from '../../../hooks/useHowls';
import { setCurrentBeat } from '../../../redux/ui/ui.actions';

const Keyboard = () => {
  const dispatch = useDispatch();
  const { howlList } = useHowls();

  useEffect(() => {
    console.log('load keys');
    const keyboardCbs = howlList?.length
      ? howlList.reduce((acc, howl) => {
          const { key, option, play } = howl;
          const cb = () => {
            dispatch(setCurrentBeat(null, [option]));
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
