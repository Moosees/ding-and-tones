import { metreList } from '../metre';
import { store } from '../../redux/store';

export const buildPatternFromSong = (howls) => {
  const {
    song: { arrangement, bars, beats },
    ui: { mutedBars },
  } = store.getState();

  const pattern = [];
  const arrangementNonMuted = arrangement.filter((barId) => !mutedBars[barId]);

  arrangementNonMuted.forEach((barId) => {
    const { measure, metre, subdivision } = bars[barId];
    const { lengthInBeats } = metreList[metre];
    const measureFiltered = measure.reduce((acc, { beatId, value }) => {
      if (!beatId || value > subdivision) return acc;

      const { sound, mode } = beats[beatId];
      const play = () => {
        sound.forEach((note) => {
          if (note === '-' || !howls[note]) return;
          howls[note].play();
        });
      };
      acc.push({ sound, mode, beatId, play });

      return acc;
    }, []);

    pattern.push({
      barId,
      lengthInBeats,
      measure: measureFiltered,
    });
  });

  return pattern;
};
