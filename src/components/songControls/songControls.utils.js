import { v4 as uuid } from 'uuid';
import {
  setCurrentBar,
  setCurrentBeat,
  setIsSongPlaying,
} from '../../redux/song/song.actions';
import { store } from '../../redux/store';

// Playing songs
const playBeat = (beat, timeout) =>
  new Promise((resolve, reject) => {
    if (!store.getState().song.isSongPlaying) return reject();

    store.dispatch(setCurrentBeat(beat.beatId));

    if (beat.sound === '1') new Audio('audio/rav/test.wav').play();

    setTimeout(() => {
      return resolve();
    }, timeout);
  });

const playBar = async (bar, bpm) => {
  const [, value] = bar.timeSignature.split('/');
  const timeoutMultiplier = bar.subdivision / value;
  const timeout = 60000 / bpm / timeoutMultiplier;
  const beats = bar.measure.flat();

  for (let beat of beats) {
    try {
      await playBeat(beat, timeout);
    } catch (e) {
      return;
    }
  }
};

export const playSong = async () => {
  const { bars, song } = store.getState();

  for (let { barId, arrangementId } of song.arrangement) {
    const nextBar = bars[barId];
    store.dispatch(setCurrentBar(arrangementId));

    await playBar(nextBar, song.bpm);
  }
  store.dispatch(setCurrentBeat(null));
  store.dispatch(setCurrentBar(null));
  store.dispatch(setIsSongPlaying(false));
};

// Creating empty beats
const createNewBeat = (partsPerBeat) => {
  const newBeat = [];

  for (let i = 0; i < partsPerBeat; ++i) {
    newBeat.push({ beatId: uuid(), sound: '' });
  }

  return newBeat;
};

export const createNewBar = (timeSignature, subdivision) => {
  const [beats, value] = timeSignature.split('/');
  const partsPerBeat = subdivision / value;
  const newMeasure = [];

  for (let i = 0; i < beats; ++i) {
    newMeasure.push(createNewBeat(partsPerBeat));
  }

  return newMeasure;
};
