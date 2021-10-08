import { metreList } from '../metre';
import { store } from '../../redux/store';

export const buildPatternFromSong = (howls) => {
  const {
    song: {
      arrangement,
      bars,
      beats,
      info: { bpm },
    },
    ui: { mutedBars },
  } = store.getState();

  const pattern = [];
  const arrangementNonMuted = arrangement.filter((barId) => !mutedBars[barId]);

  arrangementNonMuted.forEach((barId) => {
    const { measure, metre, subdivision } = bars[barId];
    const { lengthInBeats } = metreList[metre];

    const measureFiltered = measure.filter(
      ({ beatId, value }) => beatId && value <= subdivision
    );

    const barDuration = (60000 / bpm) * lengthInBeats;
    const beatDuration = barDuration / measureFiltered.length;

    measureFiltered.forEach(({ beatId, value }) => {
      const { sound, mode, hand } = beats[beatId];
      const play = () => {
        sound.forEach((note) => {
          if (note === '-' || !howls[note]) return;
          howls[note].play();
        });
      };

      pattern.push({
        barId,
        beatId,
        sound,
        mode,
        hand,
        play,
        duration: beatDuration,
      });
    });
  });

  console.log({ pattern });
  return pattern;
};
