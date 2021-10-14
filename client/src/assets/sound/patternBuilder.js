import { metreList } from '../metre';
import { store } from '../../redux/store';

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
      sound.forEach((note) => {
        if (note === '-' || !howls[note]) return;
        howls[note].play();
      });
    };

    return {
      uiUpdates: {
        currentBar: barId,
        currentBeat: beatId,
        currentHand: hand,
        currentSound: sound || [],
      },
      mode,
      play,
      duration: beatDuration,
    };
  });
};

export const buildPatternFromSong = (howls) => {
  const {
    song: { arrangement },
    ui: { mutedBars },
  } = store.getState();

  const arrangementNonMuted = arrangement.filter((barId) => !mutedBars[barId]);

  const pattern = arrangementNonMuted.reduce((acc, barId) => {
    const bar = buildPatternFromBar(barId, howls);
    return [...acc, ...bar];
  }, []);

  console.log({ pattern });
  return pattern;
};
