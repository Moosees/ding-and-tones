import { Howl, Howler } from 'howler';
import { beatOptionToKeyCode } from '../keyCodes';

export const cleanupHowls = () => {
  Howler.stop();
};

export const areHowlsLoaded = async (howls) => {
  await Promise.all(
    howls.map(
      ({ howl }) =>
        new Promise((resolve) => {
          // console.log({ status: howl.state(), howl });
          if (howl.state() === 'loaded') {
            resolve();
            return;
          }
          howl.once('load', () => resolve());
        })
    )
  );
};

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
    howl.once('loaderror', () => console.error(howl, 'load failed'));
    const key = beatOptionToKeyCode[option];
    const play = () => playHowl(howl);

    acc.howlOptionCbs[option] = { play };
    acc.howlList.push({ key, play, howl, option });
    return acc;
  }, initialValues);
};
