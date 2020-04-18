import { v4 as uuid } from 'uuid';
import {
  setCurrentBar,
  setCurrentBeat,
  setIsSongPlaying,
} from '../../redux/song/song.actions';
import { store } from '../../redux/store';
import { metreList } from '../../meter.data';

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
  // This is something we need
  const beatLengthInMs = 60000 / bpm;

  // this is the fishy stuff that only works for simple metre
  const [, beatValue] = bar.timeSignature.split('/');
  const timeoutMultiplier = bar.subdivision / beatValue;
  const timeout = beatLengthInMs / timeoutMultiplier;

  // Save total length of the bar as variable
  // Or just beat value separate?
  // or 'bar is 3.5 beats long'
  console.log({ timeoutMultiplier });
  console.log(bar.measure.length, 'Beats');

  // this is where the magic happens
  const beats = bar.measure.flat();
  console.log(beats.length, 'Total events');

  // bpm always counts quarter notes = best solution?
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
    newBeat.push({ beatId: uuid(), sound: i === 0 ? '0' : '' });
  }

  return newBeat;
};

export const createNewBar = (metre, subdivision) => {
  const { template, minSubdivision } = metreList[metre];
  const newMeasure = [];

  template.forEach((defaultParts) => {
    const partsPerBeat = defaultParts * (subdivision / minSubdivision);
    newMeasure.push(createNewBeat(partsPerBeat));
  });
  return newMeasure;
};
