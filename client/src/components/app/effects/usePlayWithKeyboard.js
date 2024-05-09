import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import { howls } from '../../../assets/sound/howls';
import { updateSongPlayer } from '../../../redux/song/song.slice';

const usePlayWithKeyboard = () => {
  const dispatch = useDispatch();
  const scale = useSelector(({ scale }) => scale.parsed.pitched);
  const status = useSelector(({ howls }) => howls.status);

  useEffect(() => {
    const allNotes = [
      ...scale,
      { note: 't', option: 't' },
      { note: 'T', option: 'T' },
    ];

    const keyboardCbs = allNotes.reduce((acc, { note, option }) => {
      const keyCode = beatOptionToKeyCode[option];

      acc[keyCode] = () => {
        if (!howls[note] || status[note] !== 'ready') return;

        dispatch(
          updateSongPlayer({
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
  }, [dispatch, status, scale]);
};

export default usePlayWithKeyboard;
