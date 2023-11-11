import { v4 as uuid } from 'uuid';

export const copyBar = (barId, bars, beats) => {
  const { measure, subdivisions, metre, repeats } = bars[barId];
  const newBarId = uuid();
  const newBeats = {};
  const newBar = { metre, repeats };

  newBar.subdivisions = [...subdivisions];
  newBar.measure = measure.map((beatId) => {
    const newBeatId = uuid();
    newBeats[newBeatId] = {
      ...beats[beatId],
      sound: [...beats[beatId].sound],
    };

    return newBeatId;
  });

  return { newBarId, newBar, newBeats };
};
