import { v4 as uuid } from 'uuid';
import { store } from '../../../redux/store';

export const copyBar = (barId) => {
  const {
    song: { beats, bars },
  } = store.getState();

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
