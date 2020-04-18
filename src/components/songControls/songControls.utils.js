import { v4 as uuid } from 'uuid';
import { metreList } from '../../meter.data';
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

    if (beat.sound === '0') new Audio('audio/rav/test.wav').play();

    setTimeout(() => {
      return resolve();
    }, timeout);
  });

const playBar = async (bar, bpm) => {
  const beats = bar.measure.flat();
  const barLength = (60000 / bpm) * bar.lengthInBeats;
  const timeout = barLength / beats.length;

  for (let beat of beats) {
    try {
      await playBeat(beat, timeout);
    } catch (e) {
      return;
    }
  }
};

// bpm always counts quarter notes right now
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
