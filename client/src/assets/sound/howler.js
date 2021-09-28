import { Howl, Howler } from 'howler';
import { beatOptionToKeyCode } from '../keyCodes';

export const cleanupHowls = () => {
  Howler.stop();
};

export const playHowl = (howl) => {
  console.log(Howler);
  // if (howl.playing()) howl.stop().play();
  if (howl.playing()) howl.seek(0);
  else howl.play();
};

export const createHowls = (soundOptions) => {
  const initialValues = {
    howlOptionCbs: {},
    howlList: [],
  };

  if (!soundOptions) return initialValues;

  return Object.keys(soundOptions).reduce((acc, option) => {
    const howl = new Howl({ src: [soundOptions[option]] });
    const key = beatOptionToKeyCode[option];
    const play = () => playHowl(howl);

    acc.howlOptionCbs[option] = { play };
    acc.howlList.push({ key, play, howl, option });
    return acc;
  }, initialValues);
};
