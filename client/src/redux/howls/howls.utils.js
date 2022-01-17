import { Howl, Howler } from 'howler';
import { beatOptionToKeyCode } from '../../assets/keyCodes';
import { store } from '../store';
import { updateHowlLoadingStatus } from './howls.actions';

export const cleanupHowls = () => {
  const { howls } = store.getState();
  Howler.stop();

  howls.all.forEach(({ howl }) => {
    howl.off();
    howl.unload();
  });
};

export const onHowlError = (option, howl, error) => {
  howl.off('load');
  store.dispatch(updateHowlLoadingStatus(option, 'loaderror'));
};

export const onHowlLoad = (option, howl) => {
  howl.off('loaderror');
  store.dispatch(updateHowlLoadingStatus(option, 'ready'));
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
      howls: {
        info: { volume },
      },
    } = store.getState();

    howl.fade(volume, 0, timeout, newId);
    howl.off('play', fadeEvent);

    setTimeout(() => {
      howl.stop(newId);
    }, timeout);
  };

  howl.on('play', fadeEvent);
};

export const createHowl = (option, path) => {
  const howl = new Howl({ src: path });

  howl.once('loaderror', (_id, error) => onHowlError(option, howl, error));
  howl.once('load', () => onHowlLoad(option, howl));
  howl.on('playerror', () => onHowlPlayError(option));

  const key = beatOptionToKeyCode[option];
  const play = () => playHowl(howl);

  return { key, play, howl };
};

export const createHowls = () => {
  const {
    howls: {
      info: { audioSrc },
    },
    scale: {
      parsed: { pitched },
    },
  } = store.getState();

  const initialValues = {
    optionCbs: {},
    all: [],
  };

  const newHowls = pitched.reduce((acc, { note, option }) => {
    store.dispatch(updateHowlLoadingStatus(note, 'loading'));

    const { key, play, howl } = createHowl(
      option,
      `${audioSrc.path}/${note}.mp3`
    );

    acc.optionCbs[option] = { play };
    acc.all.push({ key, play, howl, option, note });

    return acc;
  }, initialValues);

  return newHowls;
};
