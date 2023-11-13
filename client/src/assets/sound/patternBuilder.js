import { store } from '../../redux/store';
import { createBarTemplate } from '../metre';

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

  const { measure, metre, subdivisions } = bars[barId];
  const barTemplate = createBarTemplate(metre, subdivisions);

  const beatDurationBaseline = 60000 / bpm / 12;

  return measure.map((beatId, i) => {
    const { sound, mode, hand } = beats[beatId];
    const play = () => {
      for (const option of sound) {
        if (!howls[option]) return;

        howls[option].play();
      }
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
      duration: barTemplate[i].beatLength * beatDurationBaseline,
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
