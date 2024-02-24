import { Howl, Howler } from 'howler';
import { howls } from '../../assets/sound/howls';
import { store } from '../store';
import { updateHowlLoadingStatus } from './howls.actions';

export const prepareHowlForRemoval = (howl) => {
  howl?.howl?.off();
  howl?.howl?.unload();
};

export const cleanupHowls = (howlsToRemove) => {
  Howler.stop();

  for (const howl of howlsToRemove) {
    prepareHowlForRemoval(howls[howl]);
    howls[howl] = null;
  }

  return howlsToRemove;
};

const sortHowlsForUpdate = (sounds) => {
  const addSet = new Set(sounds.map(({ note }) => note));
  const soundsToRemove = [];
  const soundsToKeep = [];

  for (const sound in howls) {
    if (howls[sound] && !addSet.has(sound)) {
      console.log('remove', sound);
      soundsToRemove.add(sound);
    } else if (howls[sound] && addSet.has(sound)) {
      console.log('keep', sound);
      soundsToKeep.push(sound);
      addSet.delete(sound);
    } else {
      console.log('add', sound);
    }
  }

  return { soundsToAdd: [...addSet], soundsToRemove, soundsToKeep };
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

export const updateHowls = (status, audioSrc, scale) => {
  console.log('updateHowls', audioSrc, scale);
  const sounds = parseScaleForUpdateHowls(scale);

  const { soundsToAdd, soundsToRemove, soundsToKeep } = sortHowlsForUpdate(sounds);
  console.log({ soundsToAdd, soundsToRemove, soundsToKeep });

  cleanupHowls(soundsToRemove);

  // const newHowls = sounds.reduce(
  //   (acc, { note, fileName }) => {
  //     acc[note] = howls[note]
  //       ? { ...howls[note] }
  //       : createHowl(note, fileName, audioSrc);

  //     return acc;
  //   },
  //   { status: {}, howls: {} }
  // );

  // return newHowls;
};

export const changeAudioSrc = (howls, audioSrc, scale) => {
  console.log('changeAudioSrc', howls, audioSrc, scale);
  cleanupHowls(howls, []);

  const sounds = parseScaleForUpdateHowls(scale);

  return sounds.reduce((acc, { note, fileName }) => {
    acc[note] = createHowl(note, fileName, audioSrc);

    return acc;
  }, {});
};
