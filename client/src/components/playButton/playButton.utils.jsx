import { store } from '../../redux/store';
import {
  setCurrentBar,
  setCurrentBeat,
  setIsSongPlaying,
} from '../../redux/ui/ui.actions';

const playBeatPromise = (beat, timeout, audio) =>
  new Promise((resolve, reject) => {
    if (!store.getState().ui.isSongPlaying) return reject();

    store.dispatch(setCurrentBeat(beat.beatId));

    if (beat.sound !== '-') new Audio(audio[beat.sound]).play();

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
      await playBeatPromise(beat, timeout, audio);
    } catch (e) {
      return;
    }
  }
};

const audioPromise = (sound) =>
  new Promise((resolve) => {
    const audio = new Audio(sound);
    audio.oncanplaythrough = () => resolve();
    audio.load();
  });

const setupAudio = async (scale) => {
  const sounds = scale.map((note) => `audio/pan/low/${note}.mp3`);

  const audioPromises = sounds.map(audioPromise);
  await Promise.all(audioPromises);

  return sounds;
};

const setupSong = ({ arrangement, bars, beats }) => {
  const song = [];
  arrangement.forEach((barId) => {
    const { lengthInBeats, measure, subdivision } = bars[barId];
    const measureFiltered = [];

    measure.forEach((beat) => {
      const { sound, value } = beats[beat];
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
  const { song, scale } = store.getState();
  const audio = await setupAudio(scale.scale.round);
  const arrangement = setupSong(song);

  for (let bar of arrangement) {
    store.dispatch(setCurrentBar(bar.barId));

    await playBar(bar, song.info.bpm, audio);
  }

  store.dispatch(setCurrentBeat(null));
  store.dispatch(setCurrentBar(null));
  store.dispatch(setIsSongPlaying(false));
};
