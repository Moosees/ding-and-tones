import {
  setCurrentBar,
  setCurrentBeat,
  setIsSongPlaying,
} from '../../redux/song/song.actions';
import { store } from '../../redux/store';

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
