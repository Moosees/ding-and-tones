import { Howl, Howler } from 'howler';
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

export const onHowlError = (note, howl, error) => {
  howl.off('load');
  store.dispatch(updateHowlLoadingStatus(note, 'loaderror'));
};

export const onHowlLoad = (note, howl) => {
  howl.off('loaderror');
  store.dispatch(updateHowlLoadingStatus(note, 'ready'));
};

export const onHowlPlayError = (note) => {
  store.dispatch(updateHowlLoadingStatus(note, 'playerror'));
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

export const createHowl = (note, path) => {
  const howl = new Howl({ src: path });

  howl.once('loaderror', (_id, error) => onHowlError(note, howl, error));
  howl.once('load', () => onHowlLoad(note, howl));
  howl.on('playerror', () => onHowlPlayError(note));

  const play = () => playHowl(howl);

  return { play, howl };
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

  const newHowls = pitched.reduce((acc, { note }) => {
    // store.dispatch(updateHowlLoadingStatus(note, 'loading'));
    const { play, howl } = createHowl(note, `${audioSrc.path}/${note}.mp3`);

    acc[note] = { howl, play, status: 'loading' };

    return acc;
  }, {});

  return newHowls;
};
