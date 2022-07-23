import { Howl, Howler } from 'howler';
import { store } from '../store';
import { updateHowlLoadingStatus } from './howls.actions';

export const prepareHowlForRemoval = (howl) => {
  if (!howl) {
    return;
  }

  howl.howl.off();
  howl.howl.unload();
};

export const cleanupHowls = (howls, sounds) => {
  Howler.stop();

  Object.keys(howls).forEach((howl) => {
    if (sounds.includes(howl)) {
      return;
    }

    prepareHowlForRemoval(howls[howl]);
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

export const createHowl = (note, fileName, audioSrc) => {
  const howl = new Howl({ src: `${audioSrc}/${fileName}` });

  howl.once('loaderror', (_id, error) => onHowlError(note, howl, error));
  howl.once('load', () => onHowlLoad(note, howl));
  howl.on('playerror', () => onHowlPlayError(note));

  const play = () => playHowl(howl);

  return { play, howl, status: 'loading' };
};

const parseScaleForUpdateHowls = (scale) => {
  const percussiveHits = [
    { note: 'T', fileName: 'takLoud.mp3' },
    { note: 't', fileName: 'takSoft.mp3' },
  ];

  const parsedScale = scale.map(({ note }) => ({
    note,
    fileName: note + '.mp3',
  }));

  return [...percussiveHits, ...parsedScale];
};

export const updateHowls = (howls, audioSrc, scale) => {
  const sounds = parseScaleForUpdateHowls(scale);

  cleanupHowls(
    howls,
    sounds.map(({ note }) => note)
  );

  return sounds.reduce((acc, { note, fileName }) => {
    acc[note] = howls[note]
      ? { ...howls[note] }
      : createHowl(note, fileName, audioSrc);

    return acc;
  }, {});
};

export const changeAudioSrc = (howls, audioSrc, scale) => {
  cleanupHowls(howls, []);

  const sounds = parseScaleForUpdateHowls(scale);

  return sounds.reduce((acc, { note, fileName }) => {
    acc[note] = createHowl(note, fileName, audioSrc);

    return acc;
  }, {});
};
