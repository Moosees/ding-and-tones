import { metreList } from '../../../assets/metre';
import { store } from '../../../redux/store';
import {
  setCurrentBar,
  setCurrentBeat,
  setIsPreparingSong,
  setIsSongPlaying,
} from '../../../redux/ui/ui.actions';

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

const createAudioPromise = (sound) =>
  new Promise((resolve) => {
    const audio = new Audio(sound);
    audio.oncanplaythrough = () => resolve();
    audio.load();
  });

const setupAudio = async (scale, audioPath) => {
  const percussive = { T: '/audio/takLoud.mp3', t: '/audio/takSoft.mp3' };
  const sounds = scale.map((note) => `${audioPath}/${note}.mp3`);
  const audioPromises = [
    ...sounds.map(createAudioPromise),
    ...Object.values(percussive).map(createAudioPromise),
  ];

  await Promise.all(audioPromises);

  return sounds.reduce((acc, note, i) => {
    acc[i] = note;
    return acc;
  }, percussive);
};

const setupSong = ({ arrangement, bars, beats }) => {
  const song = [];
  arrangement.forEach((barId) => {
    const { measure, metre, subdivision } = bars[barId];
    const { lengthInBeats } = metreList[metre];
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
export const playSong = async (scale, song, audioPath) => {
  store.dispatch(setIsPreparingSong(true));
  const audio = await setupAudio(scale.notes.round, audioPath);
  const arrangement = setupSong(song);
  store.dispatch(setIsPreparingSong(false));

  for (let bar of arrangement) {
    store.dispatch(setCurrentBar(bar.barId));

    await playBar(bar, song.info.bpm, audio);
  }

  store.dispatch(setCurrentBeat(null));
  store.dispatch(setCurrentBar(null));
  store.dispatch(setIsSongPlaying(false));
};
