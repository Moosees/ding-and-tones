import { store } from '../../redux/store';
import {
  setCurrentBar,
  setCurrentBeat,
  setIsPreparingSong,
  setIsSongPlaying,
} from '../../redux/ui/ui.actions';
import { setupSong } from './patternBuilder';

const playBeatPromise = (beat, timeout, audio) =>
  new Promise((resolve, reject) => {
    if (!store.getState().ui.isSongPlaying) return reject();

    store.dispatch(setCurrentBeat(beat.beatId, beat.sound));
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
      return;
    }
  }
};

// bpm always counts quarter notes right now
export const playPattern = async (allSounds, song, mutedBars) => {
  store.dispatch(setIsPreparingSong(true));
  const arrangement = setupSong(song, mutedBars);
  store.dispatch(setIsPreparingSong(false));

  for (let bar of arrangement) {
    store.dispatch(setCurrentBar(bar.barId));

    await playBar(bar, song.info.bpm, allSounds);
  }

  store.dispatch(setCurrentBeat(null));
  store.dispatch(setCurrentBar(null));
  store.dispatch(setIsSongPlaying(false));
};
