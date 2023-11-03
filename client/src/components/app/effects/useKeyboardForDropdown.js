import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AUTO_MOVE_DELAY, hands } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import useCloseOnEsc from '../../../hooks/useCloseOnEsc';
import {
  clearBeat,
  updateHandForBeat,
  updateSoundForBeat,
} from '../../../redux/song/song.actions';
import {
  setCurrentDropdown,
  toggleAutoMove,
  toggleMultiSelect,
} from '../../../redux/ui/ui.actions';

const useKeyboardForDropdown = () => {
  const dispatch = useDispatch();
  const { autoMove, autoMoveOrder, currentDropdown, multiSelect, scale } =
    useSelector(({ ui, scale }) => ({
      autoMove: ui.autoMove,
      autoMoveOrder: ui.autoMoveOrder,
      currentDropdown: ui.currentDropdown,
      multiSelect: ui.multiSelect,
      scale: scale.parsed.pitched,
    }));

  useCloseOnEsc(() => dispatch(setCurrentDropdown(null)));

  useEffect(() => {
    if (currentDropdown === null) return;

    const percussionCbs = {
      [beatOptionToKeyCode['t']]: () =>
        dispatch(updateSoundForBeat(currentDropdown, 't')),
      [beatOptionToKeyCode['T']]: () =>
        dispatch(updateSoundForBeat(currentDropdown, 'T')),
    };

    const handCbs = hands.reduce((acc, { short, value }) => {
      const key = beatOptionToKeyCode[short];
      return {
        ...acc,
        [key]: () => dispatch(updateHandForBeat(currentDropdown, value)),
      };
    }, {});

    const soundCbs = scale.reduce((acc, { option }) => {
      const key = beatOptionToKeyCode[option];
      return {
        ...acc,
        [key]: () => dispatch(updateSoundForBeat(currentDropdown, option)),
      };
    }, {});

    const { prevBeatId, nextBeatId } = autoMoveOrder[currentDropdown];
    const otherCbs = {
      [beatOptionToKeyCode['chord']]: () => dispatch(toggleMultiSelect()),
      [beatOptionToKeyCode['auto']]: () => dispatch(toggleAutoMove()),
      [beatOptionToKeyCode['nextBeat']]: () =>
        dispatch(setCurrentDropdown(nextBeatId || currentDropdown)),
      [beatOptionToKeyCode['prevBeat']]: () =>
        dispatch(setCurrentDropdown(prevBeatId || currentDropdown)),
      [beatOptionToKeyCode['nextBeatAlt']]: () =>
        dispatch(setCurrentDropdown(nextBeatId || currentDropdown)),
      [beatOptionToKeyCode['prevBeatAlt']]: () =>
        dispatch(setCurrentDropdown(prevBeatId || currentDropdown)),
      [beatOptionToKeyCode['skip']]: () =>
        dispatch(setCurrentDropdown(nextBeatId || currentDropdown)),
      [beatOptionToKeyCode['clear']]: () =>
        dispatch(clearBeat(currentDropdown)),
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
        dispatch(setCurrentDropdown(nextBeatId || currentDropdown));
        return;
      }

      timeout = setTimeout(() => {
        dispatch(setCurrentDropdown(nextBeatId || currentDropdown));
      }, AUTO_MOVE_DELAY);
    };

    document.addEventListener('keydown', keyboardListener);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('keydown', keyboardListener);
    };
  }, [autoMove, currentDropdown, multiSelect, scale, autoMoveOrder, dispatch]);
};

export default useKeyboardForDropdown;
