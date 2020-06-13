import { store } from '../../redux/store';
import {
  setCurrentBar,
  setCurrentBeat,
  setIsSongPlaying,
} from '../../redux/ui/ui.actions';

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
  const { measure, lengthInBeats } = bar;
  const barLength = (60000 / bpm) * lengthInBeats;
  const timeout = barLength / measure.length;

  for (let beat of bar.measure) {
    try {
      await playBeat(beat, timeout, audio);
    } catch (e) {
      return;
    }
  }
};

const setupAudio = (scale) => {
  const audio = scale.map((note) => `audio/pan/low/${note}.mp3`);

  audio.forEach((sound) => {
    new Audio(sound).load();
  });

  return audio;
};

const setupSong = (bars) => {
  const song = [];
  bars.arrangement.forEach((barId) => {
    const { lengthInBeats, measure, subdivision } = bars.bars[barId];
    const measureFiltered = [];

    measure.forEach((beat) => {
      const { sound, value } = bars.beats[beat];
      if (value <= subdivision) measureFiltered.push({ sound, beatId: beat });
    });

    song.push({
      barId,
      lengthInBeats,
      measure: measureFiltered,
    });
  });

  return song;
};

// bpm always counts quarter notes right now
export const playSong = async () => {
  const { bars, song, scale } = store.getState();
  const audio = setupAudio(scale.scaleSimple);
  const arrangement = setupSong(bars);

  for (let bar of arrangement) {
    store.dispatch(setCurrentBar(bar.barId));

    await playBar(bar, song.bpm, audio);
  }

  store.dispatch(setCurrentBeat(null));
  store.dispatch(setCurrentBar(null));
  store.dispatch(setIsSongPlaying(false));
};
