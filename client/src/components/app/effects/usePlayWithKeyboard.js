import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentlyPlaying } from '../../../redux/ui/ui.actions';

const usePlayWithKeyboard = () => {
  const dispatch = useDispatch();
  const howls = useSelector(({ howls }) => howls.all);

  useEffect(() => {
    console.log('load keys');
    const keyboardCbs = howls?.length
      ? howls.reduce((acc, howl) => {
          const { key, option, play } = howl;
          const cb = () => {
            dispatch(
              setCurrentlyPlaying({
                currentHand: option === 't' ? 2 : 1,
                currentSound: [option],
              })
            );
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
  }, [dispatch, howls]);
};

export default usePlayWithKeyboard;
