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

    if (!beat.mode || beat.mode === 'c')
      beat.sound.forEach((tone) => {
        if (tone !== '-' && audio[tone]) new Audio(audio[tone]).play();
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

const setupSong = ({ arrangement, bars, beats }, mutedBars) => {
  const song = [];
  const arrangementNonMuted = arrangement.filter((barId) => !mutedBars[barId]);

  arrangementNonMuted.forEach((barId) => {
    const { measure, metre, subdivision } = bars[barId];
    const { lengthInBeats } = metreList[metre];
    const measureFiltered = measure.reduce((acc, { beatId, value }) => {
      if (beatId && value <= subdivision) {
        const { sound, mode } = beats[beatId];
        acc.push({ sound, mode, beatId });
      }
      return acc;
    }, []);

    song.push({
      barId,
      lengthInBeats,
      measure: measureFiltered,
    });
  });

  return song;
};

// bpm always counts quarter notes right now
export const playSong = async (scale, song, mutedBars, audioPath) => {
  store.dispatch(setIsPreparingSong(true));
  const audio = await setupAudio(scale.notes.round, audioPath);
  const arrangement = setupSong(song, mutedBars);
  store.dispatch(setIsPreparingSong(false));

  for (let bar of arrangement) {
    store.dispatch(setCurrentBar(bar.barId));

    await playBar(bar, song.info.bpm, audio);
  }

  store.dispatch(setCurrentBeat(null));
  store.dispatch(setCurrentBar(null));
  store.dispatch(setIsSongPlaying(false));
};
