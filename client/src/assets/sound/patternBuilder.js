import { metreList } from '../metre';
import { store } from '../../redux/store';

const getDefaultHandForSound = (sound) => {
  if (sound.length === 1) {
    return sound[0] === 't' ? 2 : 1;
  }

  return 3;
};

const getHowlsForScale = () => {
  const {
    howls,
    scale: {
      parsed: { pitched },
    },
  } = store.getState();

  const initialNotes = {
    t: howls.data['t'],
    T: howls.data['T'],
  };

  return pitched.reduce((acc, { note, option }) => {
    acc[option] = howls.data[note];

    return acc;
  }, initialNotes);
};

export const buildPatternFromBar = (barId, howls) => {
  const {
    song: {
      bars,
      beats,
      info: { bpm },
    },
  } = store.getState();

  const { measure, metre, subdivision } = bars[barId];
  const { lengthInBeats } = metreList[metre];

  const measureFiltered = measure.filter(
    ({ beatId, value }) => beatId && value <= subdivision
  );

  const barDuration = (60000 / bpm) * lengthInBeats;
  const beatDuration = barDuration / measureFiltered.length;

  return measureFiltered.map(({ beatId, value }) => {
    const { sound, mode, hand } = beats[beatId];
    const play = () => {
      sound.forEach((option) => {
        if (!howls[option]) return;

        howls[option].play();
      });
    };

    return {
      uiUpdates: {
        currentBar: barId,
        currentBeat: beatId,
        currentHand: hand || getDefaultHandForSound(sound),
        currentSound: sound || [],
      },
      mode,
      play,
      duration: beatDuration,
    };
  });
};

export const buildPatternFromSong = () => {
  const {
    song: { arrangement },
    ui: { mutedBars },
  } = store.getState();

  const howls = getHowlsForScale();
  const arrangementNonMuted = arrangement.filter((barId) => !mutedBars[barId]);

  const pattern = arrangementNonMuted.reduce((acc, barId) => {
    const bar = buildPatternFromBar(barId, howls);
    return [...acc, ...bar];
  }, []);

  return pattern;
};
