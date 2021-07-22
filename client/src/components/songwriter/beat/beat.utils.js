import { hands } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';

export const createKeyboardCbs = (
  beatId,
  soundCb,
  handCb,
  { round, extra, percussive }
) => {
  console.log({ round, extra, percussive });
  const handCbs = hands.map(({ short, value }) => ({
    [beatOptionToKeyCode[short]]: handCb(beatId, value),
  }));
  console.log({ handCbs });
};
