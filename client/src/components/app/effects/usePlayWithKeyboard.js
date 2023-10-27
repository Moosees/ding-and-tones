import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import { setCurrentlyPlaying } from '../../../redux/ui/ui.actions';

const usePlayWithKeyboard = () => {
  const dispatch = useDispatch();
  const { howls, scale } = useSelector(({ howls, scale }) => ({
    howls: howls.data,
    scale: scale.parsed.pitched,
  }));

  useEffect(() => {
    const allNotes = [
      ...scale,
      { note: 't', option: 't' },
      { note: 'T', option: 'T' },
    ];

    const keyboardCbs = allNotes.reduce((acc, { note, option }) => {
      const keyCode = beatOptionToKeyCode[option];

      acc[keyCode] = () => {
        if (!howls[note] || howls[note].status !== 'ready') return;

        dispatch(
          setCurrentlyPlaying({
            currentHand: option === 't' ? 2 : 1,
            currentSound: [option],
          })
        );
        howls[note].play();
      };

      return acc;
    }, {});

    const keyboardListener = (e) => {
      if (!keyboardCbs[e.code]) return;
      keyboardCbs[e.code]();
    };

    document.addEventListener('keydown', keyboardListener);

    return () => {
      document.removeEventListener('keydown', keyboardListener);
    };
  }, [dispatch, howls, scale]);
};

export default usePlayWithKeyboard;
