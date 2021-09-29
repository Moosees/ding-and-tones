import { store } from '../../redux/store';
import {
  setCurrentBar,
  setCurrentBeat,
  setIsSongPlaying,
} from '../../redux/ui/ui.actions';

const resetSongUiState = () => {
  store.dispatch(setCurrentBeat(null));
  store.dispatch(setCurrentBar(null));
  store.dispatch(setIsSongPlaying(false));
};

const playBeatPromise = (beat, timeout, audio) =>
  new Promise((resolve, reject) => {
    if (!store.getState().ui.isSongPlaying) return reject('Song is stopped');

    store.dispatch(setCurrentBeat(beat.beatId || null, beat.sound));
    const volume = beat.sound.length > 1 ? 0.55 : 0.8;

    if (!beat.mode || beat.mode === 'c')
      beat.sound.forEach((tone) => {
        if (tone !== '-' && audio[tone]) {
          const player = new Audio(audio[tone]);
          player.volume = volume;
          player.play();
        }
      });

    setTimeout(() => {
      return resolve();
    }, timeout);
  });

const playBar = async (bar, bpm, audio) => {
  const { measure, lengthInBeats } = bar;
  const barLength = (60000 / bpm) * lengthInBeats;
  const timeout = barLength / measure.length;

  for (let beat of measure) {
    try {
      await playBeatPromise(beat, timeout, audio);
    } catch (e) {
      console.log('play bar failed: ', e);
      return;
    }
  }
};

// bpm always counts quarter notes right now
export const playPattern = async (pattern) => {
  const {
    song: {
      info: { bpm },
    },
    ui: { soundOptions },
  } = store.getState();

  for (let bar of pattern) {
    console.log({ bar, bpm });
    bar.barId && store.dispatch(setCurrentBar(bar.barId));

    await playBar(bar, bpm, soundOptions.allSounds);
  }

  resetSongUiState();
};
