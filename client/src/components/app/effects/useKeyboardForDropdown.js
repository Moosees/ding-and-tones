import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hands } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import {
  updateHandForBeat,
  updateSoundForBeat,
} from '../../../redux/song/song.actions';
import { toggleMultiSelect } from '../../../redux/ui/ui.actions';

const useKeyboardForDropdown = () => {
  const dispatch = useDispatch();
  const { currentDropdown, scale } = useSelector(({ ui, scale }) => ({
    currentDropdown: ui.currentDropdown,
    scale: scale.parsed.pitched,
  }));

  useEffect(() => {
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

    const otherCbs = {
      [beatOptionToKeyCode['chord']]: () => dispatch(toggleMultiSelect()),
    };

    const keyboardCbs = {
      ...percussionCbs,
      ...handCbs,
      ...soundCbs,
      ...otherCbs,
    };

    const keyboardListener = (e) => {
      if (!keyboardCbs[e.keyCode]) return;

      keyboardCbs[e.keyCode]();
    };

    document.addEventListener('keydown', keyboardListener);

    return () => document.removeEventListener('keydown', keyboardListener);
  }, [currentDropdown, scale, dispatch]);
};

export default useKeyboardForDropdown;
