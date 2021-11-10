import { Howl, Howler } from 'howler';
import { beatOptionToKeyCode } from '../../assets/keyCodes';
import { store } from '../store';
import { updateHowlLoadingStatus } from './howls.actions';

let howlErrors = {};
let howls = [];

export const cleanupHowls = () => {
  // console.log({ howls });
  Howler.stop();
  howlErrors = {};
  howls.forEach((howl) => {
    howl.off();
    howl.unload();
  });
};

export const onHowlError = (option, howl, error) => {
  console.error(option, error);
  howlErrors[option] = true;
  howl.off('load');
  store.dispatch(updateHowlLoadingStatus(option, 'loaderror'));
};

export const onHowlLoad = (option, howl) => {
  howl.off('loaderror');
  store.dispatch(updateHowlLoadingStatus(option, 'ready'));
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
  const newId = howl.play();

  const fadeEvent = (id) => {
    if (id === newId) return;

    const timeout = 100;

    // console.log({ id, newId, ids: howl._getSoundIds() });
    howl.fade(1.0, 0, timeout, newId);
    howl.off('play', fadeEvent);

    setTimeout(() => {
      // console.log('stopping', newId);
      howl.stop(newId);
    }, timeout);
  };

  howl.on('play', fadeEvent);
};

export const createHowls = (soundOptions) => {
  const initialValues = {
    howlOptionCbs: {},
    howlList: [],
  };

  if (!soundOptions) return initialValues;

  const newHowls = Object.keys(soundOptions).reduce((acc, option) => {
    const howl = new Howl({ src: [soundOptions[option]] });

    howl.once('loaderror', (_id, error) => onHowlError(option, howl, error));
    howl.once('load', () => onHowlLoad(option, howl));

    const key = beatOptionToKeyCode[option];
    const play = () => playHowl(howl);

    acc.howlOptionCbs[option] = { play };
    acc.howlList.push({ key, play, howl, option });
    return acc;
  }, initialValues);

  howls = newHowls.howlList.map(({ howl }) => howl);

  return newHowls;
};
