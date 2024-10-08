import { Howl, Howler } from 'howler';
import { howls } from '../../assets/sound/howls';
import { store } from '../store';
import { filterObjectByKeyArray } from '../store.utils';
import { updateHowlLoadingStatus } from './scale.slice';

const prepareHowlForRemoval = (howl) => {
  howl?.howl?.off();
  howl?.howl?.unload();
};

const cleanupHowls = (notesToRemove) => {
  Howler.stop();

  for (const note of notesToRemove) {
    prepareHowlForRemoval(howls[note]);
    delete howls[note];
  }
};

const sortHowlsForUpdate = (sounds) => {
  const addSet = new Set(sounds.map(({ note }) => note));
  const notesToRemove = [];
  const notesToKeep = [];

  for (const sound in howls) {
    if (howls[sound] && !addSet.has(sound)) {
      notesToRemove.push(sound);
    } else if (howls[sound] && addSet.has(sound)) {
      notesToKeep.push(sound);
      addSet.delete(sound);
    }
  }

  const soundsToAdd = sounds.filter(({ note }) => addSet.has(note));

  return { soundsToAdd, notesToRemove, notesToKeep };
};

const onHowlError = (note, howl, error) => {
  howl.off('load');
  store.dispatch(updateHowlLoadingStatus({ note, status: 'loaderror' }));
};

const onHowlLoad = (note, howl) => {
  howl.off('loaderror');
  store.dispatch(updateHowlLoadingStatus({ note, status: 'ready' }));
};

const onHowlPlayError = (note) => {
  store.dispatch(updateHowlLoadingStatus({ note, status: 'playerror' }));
};

const playHowl = (howl) => {
  const newId = howl.play();

  const fadeEvent = (id) => {
    if (id === newId) return;

    const timeout = 100;
    const {
      scale: {
        howls: { volume },
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

const createHowl = (note, fileName, audioSrc) => {
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
  const sounds = parseScaleForUpdateHowls(scale);

  const { soundsToAdd, notesToRemove, notesToKeep } =
    sortHowlsForUpdate(sounds);

  cleanupHowls(notesToRemove);

  createHowls(soundsToAdd, audioSrc);

  const statusToKeep = filterObjectByKeyArray(status, notesToKeep, false);

  return createStatus(soundsToAdd, statusToKeep);
};

export const changeAudioSrc = (audioSrc, scale) => {
  const sounds = parseScaleForUpdateHowls(scale);

  cleanupHowls(sounds.map(({ note }) => note));

  createHowls(sounds, audioSrc);

  return createStatus(sounds);
};
