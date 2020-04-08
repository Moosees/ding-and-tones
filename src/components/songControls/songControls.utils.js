import { setCurrentBar, setCurrentBeat } from '../../redux/song/song.actions';
import { store } from '../../redux/store';

const playBeat = (beat, timeout) =>
  new Promise((resolve) => {
    store.dispatch(setCurrentBeat(beat.id));

    // add logic for playing different tones
    if (beat.tone === '1') new Audio('audio/rav/test.wav').play();

    setTimeout(() => {
      resolve();
    }, timeout);
  });

const playBar = async (bar, bpm) => {
  const [, value] = bar.timeSignature.split('/');
  const timeoutMultiplier = bar.gridValue / value;
  // add swing in the future?
  const timeout = 60000 / bpm / timeoutMultiplier;

  store.dispatch(setCurrentBar(bar.id));

  for (let beat of bar.pattern) {
    await playBeat(beat, timeout);
  }
};

export const playSong = async (song) => {
  for (let bar of song.bars) {
    await playBar(bar, song.bpm);
  }
  store.dispatch(setCurrentBeat(null));
  store.dispatch(setCurrentBar(null));
};
