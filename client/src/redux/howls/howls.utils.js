import { Howl, Howler } from 'howler';
import { howls } from '../../assets/sound/howls';
import { store } from '../store';
import { updateHowlLoadingStatus } from './howls.actions';
import { filterState } from '../store.utils';

export const prepareHowlForRemoval = (howl) => {
  howl?.howl?.off();
  howl?.howl?.unload();
};

export const cleanupHowls = (notesToRemove) => {
  Howler.stop();

  for (const note of notesToRemove) {
    prepareHowlForRemoval(howls[note]);
    howls[note] = null;
  }
};

const sortHowlsForUpdate = (sounds) => {
  const addSet = new Set(sounds.map(({ note }) => note));
  const notesToRemove = [];
  const notesToKeep = [];

  for (const sound in howls) {
    if (howls[sound] && !addSet.has(sound)) {
      console.log('remove', sound);
      notesToRemove.add(sound);
    } else if (howls[sound] && addSet.has(sound)) {
      console.log('keep', sound);
      notesToKeep.push(sound);
      addSet.delete(sound);
    } else {
      console.log('add', sound);
    }
  }

  const soundsToAdd = sounds.filter(({ note }) => addSet.has(note));

  return { soundsToAdd, notesToRemove, notesToKeep };
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
  console.log('adding howl:', { note, fileName });

  const howl = new Howl({ src: `${audioSrc}/${fileName}` });

  howl.once('loaderror', (_id, error) => onHowlError(note, howl, error));
  howl.once('load', () => onHowlLoad(note, howl));
  howl.on('playerror', () => onHowlPlayError(note));

  const play = () => playHowl(howl);

  howls[note] = { play, howl };
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

const createHowls = (soundsToAdd, audioSrc) => {
  for (const { note, fileName } of soundsToAdd) {
    createHowl(note, fileName, audioSrc);
  }
};

const createStatus = (soundsToAdd, statusToKeep = {}) => {
  return soundsToAdd.reduce((acc, { note }) => {
    acc[note] = 'loading';
    return acc;
  }, statusToKeep);
};

export const updateHowls = (status, audioSrc, scale) => {
  console.log('updateHowls', audioSrc, scale);
  const sounds = parseScaleForUpdateHowls(scale);

  const { soundsToAdd, notesToRemove, notesToKeep } =
    sortHowlsForUpdate(sounds);
  console.log({ soundsToAdd, notesToRemove, notesToKeep });

  cleanupHowls(notesToRemove);

  createHowls(soundsToAdd, audioSrc);

  const statusToKeep = filterState(status, notesToKeep, false);
  console.log({ statusToKeep, howls });

  return createStatus(soundsToAdd, statusToKeep);
};

export const changeAudioSrc = (audioSrc, scale) => {
  console.log('changeAudioSrc', audioSrc, scale);
  const sounds = parseScaleForUpdateHowls(scale);

  cleanupHowls(sounds.map(({ note }) => note));

  createHowls(sounds, audioSrc);

  return createStatus(sounds);
};
