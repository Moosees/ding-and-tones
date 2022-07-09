import { Howl, Howler } from 'howler';
import { store } from '../store';
import { updateHowlLoadingStatus } from './howls.actions';

export const prepareHowlForRemoval = ({ howl }) => {
  howl.off();
  howl.unload();
  console.log('cleaned up', { howl });
};

export const cleanupHowls = (howls, sounds) => {
  Howler.stop();

  console.log('cleaning up howls');

  Object.keys(howls).forEach((howl) => {
    if (sounds.includes(howl)) {
      console.log('skipping', howl);
      return;
    }

    console.log('cleaning up', howl);
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

export const createHowl = (note, audioSrc) => {
  const howl = new Howl({ src: `${audioSrc}/${note}.mp3` });

  howl.once('loaderror', (_id, error) => onHowlError(note, howl, error));
  howl.once('load', () => onHowlLoad(note, howl));
  howl.on('playerror', () => onHowlPlayError(note));

  const play = () => playHowl(howl);

  return { play, howl, status: 'loading' };
};

const parseScaleForUpdateHowls = (scale) => {
  const percussiveHits = ['takLoud', 'takSoft'];

  const parsedScale = scale.map(({ note }) => note);

  return [...percussiveHits, ...parsedScale];
};

export const updateHowls = (howls, audioSrc, scale) => {
  const sounds = parseScaleForUpdateHowls(scale);

  cleanupHowls(howls, sounds);
  return sounds.reduce((acc, sound) => {
    console.log('New howl?', sound, !howls[sound], howls[sound]);
    acc[sound] = howls[sound]
      ? { ...howls[sound] }
      : createHowl(sound, audioSrc);

    return acc;
  }, {});
};
