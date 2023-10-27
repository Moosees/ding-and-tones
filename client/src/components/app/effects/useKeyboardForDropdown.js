import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hands } from '../../../assets/constants';
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
  const { allBeats, currentDropdown, scale } = useSelector(({ ui, scale }) => ({
    allBeats: ui.allBeats,
    currentDropdown: ui.currentDropdown,
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

    const { prevBeatId, nextBeatId } = allBeats[currentDropdown];
    const otherCbs = {
      [beatOptionToKeyCode['chord']]: () => dispatch(toggleMultiSelect()),
      [beatOptionToKeyCode['auto']]: () => dispatch(toggleAutoMove()),
      [beatOptionToKeyCode['nextBeat']]: () =>
        dispatch(setCurrentDropdown(nextBeatId)),
      [beatOptionToKeyCode['prevBeat']]: () =>
        dispatch(setCurrentDropdown(prevBeatId)),
      [beatOptionToKeyCode['nextBeatAlt']]: () =>
        dispatch(setCurrentDropdown(nextBeatId)),
      [beatOptionToKeyCode['prevBeatAlt']]: () =>
        dispatch(setCurrentDropdown(prevBeatId)),
      [beatOptionToKeyCode['clear']]: () =>
        dispatch(clearBeat(currentDropdown)),
    };

    const keyboardCbs = {
      ...percussionCbs,
      ...handCbs,
      ...soundCbs,
      ...otherCbs,
    };

    const keyboardListener = (e) => {
      console.log({e})
      if (!keyboardCbs[e.code]) return;

      keyboardCbs[e.code]();
    };

    document.addEventListener('keydown', keyboardListener);

    return () => document.removeEventListener('keydown', keyboardListener);
  }, [currentDropdown, scale, allBeats, dispatch]);
};

export default useKeyboardForDropdown;
