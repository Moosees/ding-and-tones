import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AUTO_MOVE_DELAY, hands } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import useCloseOnEsc from '../../../hooks/useCloseOnEsc';
import {
  clearBeat,
  setCurrentDropdown,
  toggleAutoMove,
  toggleMultiSelect,
  updateHandForBeat,
  updateSoundForBeat,
} from '../../../redux/song/song.slice';

const useKeyboardForDropdown = () => {
  const dispatch = useDispatch();
  const autoMoveOrder = useSelector(({ song }) => song.autoMoveOrder);
  const autoMove = useSelector(({ song }) => song.ui.autoMove);
  const currentDropdown = useSelector(({ song }) => song.ui.currentDropdown);
  const multiSelect = useSelector(({ song }) => song.ui.multiSelect);
  const scale = useSelector(({ scale }) => scale.parsed.pitched);

  useCloseOnEsc(() => dispatch(setCurrentDropdown({ beatId: null })));

  useEffect(() => {
    if (currentDropdown === null) return;

    const percussionCbs = {
      [beatOptionToKeyCode['t']]: () =>
        dispatch(updateSoundForBeat({ beatId: currentDropdown, update: 't' })),
      [beatOptionToKeyCode['T']]: () =>
        dispatch(updateSoundForBeat({ beatId: currentDropdown, update: 'T' })),
    };

    const handCbs = hands.reduce((acc, { short, value }) => {
      const key = beatOptionToKeyCode[short];
      return {
        ...acc,
        [key]: () =>
          dispatch(
            updateHandForBeat({ beatId: currentDropdown, newHand: value })
          ),
      };
    }, {});

    const soundCbs = scale.reduce((acc, { option }) => {
      const key = beatOptionToKeyCode[option];
      return {
        ...acc,
        [key]: () =>
          dispatch(
            updateSoundForBeat({ beatId: currentDropdown, update: option })
          ),
      };
    }, {});

    const { prevBeatId, nextBeatId } = autoMoveOrder[currentDropdown];
    const otherCbs = {
      [beatOptionToKeyCode['chord']]: () => dispatch(toggleMultiSelect()),
      [beatOptionToKeyCode['auto']]: () => dispatch(toggleAutoMove()),
      [beatOptionToKeyCode['nextBeat']]: () =>
        dispatch(setCurrentDropdown({ beatId: nextBeatId || currentDropdown })),
      [beatOptionToKeyCode['prevBeat']]: () =>
        dispatch(setCurrentDropdown({ beatId: prevBeatId || currentDropdown })),
      [beatOptionToKeyCode['nextBeatAlt']]: () =>
        dispatch(setCurrentDropdown({ beatId: nextBeatId || currentDropdown })),
      [beatOptionToKeyCode['prevBeatAlt']]: () =>
        dispatch(setCurrentDropdown({ beatId: prevBeatId || currentDropdown })),
      [beatOptionToKeyCode['skip']]: () =>
        dispatch(setCurrentDropdown({ beatId: nextBeatId || currentDropdown })),
      [beatOptionToKeyCode['clear']]: () =>
        dispatch(clearBeat({ beatId: currentDropdown })),
    };

    const keyboardCbs = {
      ...percussionCbs,
      ...handCbs,
      ...soundCbs,
      ...otherCbs,
    };

    let timeout;

    const keyboardListener = (e) => {
      if (!keyboardCbs[e.code]) return;

      clearTimeout(timeout);
      keyboardCbs[e.code]();

      if (!autoMove || !(percussionCbs[e.code] || soundCbs[e.code])) return;

      if (!multiSelect) {
        dispatch(setCurrentDropdown({ beatId: nextBeatId || currentDropdown }));
        return;
      }

      timeout = setTimeout(() => {
        dispatch(setCurrentDropdown({ beatId: nextBeatId || currentDropdown }));
      }, AUTO_MOVE_DELAY);
    };

    document.addEventListener('keydown', keyboardListener);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('keydown', keyboardListener);
    };
  }, [dispatch, autoMove, currentDropdown, multiSelect, scale, autoMoveOrder]);
};

export default useKeyboardForDropdown;
