import { Howl, Howler } from 'howler';
import { beatOptionToKeyCode } from '../keyCodes';

let howlErrors = {};

export const cleanupHowls = () => {
  Howler.stop();
  howlErrors = {};
};

export const onHowlError = (error, option) => {
  // console.error(option, error);
  howlErrors[option] = true;
};

export const areHowlsLoaded = (howls) =>
  Promise.all(
    howls.map(
      ({ howl, option }) =>
        new Promise((resolve, reject) => {
          if (howlErrors[option]) {
            reject(`Could not load sound: ${option}`);
            return;
          }
          if (howl.state() === 'loaded') {
            resolve();
            return;
          }
          howl.once('load', () => resolve());
        })
    )
  );

export const playHowl = (howl) => {
  // console.log(Howler);
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
    howl.once('loaderror', (_id, error) => onHowlError(error, option));
    const key = beatOptionToKeyCode[option];
    const play = () => playHowl(howl);

    acc.howlOptionCbs[option] = { play };
    acc.howlList.push({ key, play, howl, option });
    return acc;
  }, initialValues);
};
