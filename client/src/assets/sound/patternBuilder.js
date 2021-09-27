import { metreList } from '../metre';

export const setupSong = ({ arrangement, bars, beats }, mutedBars) => {
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
