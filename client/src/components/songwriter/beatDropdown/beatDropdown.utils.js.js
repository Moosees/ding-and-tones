import { hands } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';

export const createKeyboardCbs = (beatId, soundCb, handCb, scale) => {
  const handCbs = hands.reduce((acc, { short, value }) => {
    const key = beatOptionToKeyCode[short];
    return { ...acc, [key]: () => handCb(beatId, value) };
  }, {});

  const soundCbs = scale.reduce((acc, { option }) => {
    const key = beatOptionToKeyCode[option];
    return { ...acc, [key]: () => soundCb(beatId, option) };
  }, {});

  return { ...handCbs, ...soundCbs };
};
