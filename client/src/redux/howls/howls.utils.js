import { Howl, Howler } from 'howler';
import { beatOptionToKeyCode } from '../../assets/keyCodes';
import { store } from '../store';
import { updateHowlLoadingStatus } from './howls.actions';

export const cleanupHowls = () => {
  // console.log({ howls });
  Howler.stop();
  // howls.forEach((howl) => {
  //   howl.off();
  //   howl.unload();
  // });
};

export const onHowlError = (option, howl, error) => {
  console.error(option, error);
  howl.off('load');
  store.dispatch(updateHowlLoadingStatus(option, 'loaderror'));
};

export const onHowlLoad = (option, howl) => {
  howl.off('loaderror');
  store.dispatch(updateHowlLoadingStatus(option, 'ready'));
  console.log('ready', option);
};

export const onHowlPlayError = (option) => {
  store.dispatch(updateHowlLoadingStatus(option, 'playerror'));
};

export const playHowl = (howl) => {
  const newId = howl.play();

  const fadeEvent = (id) => {
    if (id === newId) return;

    const timeout = 100;
    const {
      howls: { volume },
    } = store.getState();

    // console.log({ id, newId, ids: howl._getSoundIds() });
    howl.fade(volume, 0, timeout, newId);
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
    optionCbs: {},
    all: [],
  };

  if (!soundOptions) return initialValues;

  const newHowls = Object.keys(soundOptions).reduce((acc, option) => {
    store.dispatch(updateHowlLoadingStatus(option, 'loading'));
    console.log('loading', option);

    const howl = new Howl({ src: [soundOptions[option]] });

    howl.once('loaderror', (_id, error) => onHowlError(option, howl, error));
    howl.once('load', () => onHowlLoad(option, howl));
    howl.on('playerror', () => onHowlPlayError(option));

    const key = beatOptionToKeyCode[option];
    const play = () => playHowl(howl);

    acc.optionCbs[option] = { play };
    acc.all.push({ key, play, howl, option });
    return acc;
  }, initialValues);

  return newHowls;
};
