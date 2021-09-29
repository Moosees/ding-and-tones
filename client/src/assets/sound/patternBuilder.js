import { metreList } from '../metre';
import { store } from '../../redux/store';

export const buildPatternFromSong = () => {
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
      if (beatId && value <= subdivision) {
        const { sound, mode } = beats[beatId];
        acc.push({ sound, mode, beatId });
      }
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
