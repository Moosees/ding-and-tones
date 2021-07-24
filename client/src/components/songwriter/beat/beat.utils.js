import { hands } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';

export const createKeyboardCbs = (
  beatId,
  soundCb,
  handCb,
  { round, extra, percussive }
) => {
  const handCbs = hands.reduce((acc, { short, value }) => {
    const key = beatOptionToKeyCode[short];
    return { ...acc, [key]: () => handCb(beatId, value) };
  }, {});

  const soundCbs = [...round, ...extra, ...percussive].reduce(
    (acc, { value }) => {
      const key = beatOptionToKeyCode[value];
      return { ...acc, [key]: () => soundCb(beatId, value) };
    },
    {}
  );

  return { ...handCbs, ...soundCbs };
};
