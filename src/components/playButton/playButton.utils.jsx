import {
  setCurrentBar,
  setCurrentBeat,
  setIsSongPlaying,
} from '../../redux/ui/ui.actions';
import { store } from '../../redux/store';

const playBeat = (beat, timeout, audio) =>
  new Promise((resolve, reject) => {
    if (!store.getState().ui.isSongPlaying) return reject();

    store.dispatch(setCurrentBeat(beat.beatId));

    if (beat.sound !== 'P') new Audio(audio[beat.sound]).play();

    setTimeout(() => {
      return resolve();
    }, timeout);
  });

const playBar = async (bar, bpm, audio) => {
  const beats = bar.measure.flat();
  const barLength = (60000 / bpm) * bar.lengthInBeats;
  const timeout = barLength / beats.length;

  for (let beat of beats) {
    try {
      await playBeat(beat, timeout, audio);
    } catch (e) {
      return;
    }
  }
};

const setupAudio = (scale) => {
  return scale.map((note) => `audio/pan/low/${note}.mp3`);
};

// bpm always counts quarter notes right now
export const playSong = async () => {
  const { bars, song, scale } = store.getState();

  const audio = setupAudio(scale.scaleSimple);

  for (let { barId, arrangementId } of song.arrangement) {
    const nextBar = bars[barId];
    store.dispatch(setCurrentBar(arrangementId));

    await playBar(nextBar, song.bpm, audio);
  }
  store.dispatch(setCurrentBeat(null));
  store.dispatch(setCurrentBar(null));
  store.dispatch(setIsSongPlaying(false));
};
