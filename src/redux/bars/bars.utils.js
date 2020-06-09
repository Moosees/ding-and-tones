import { v4 as uuid } from 'uuid';

const updateBeatIds = (measure) => {
  return measure.map((beat) =>
    beat.map((part) => ({ ...part, beatId: uuid() }))
  );
};

export const copyBarToEnd = (barId, bars) => {
  const barToCopy = bars.find((bar) => bar.barId === barId);
  const barCopy = {
    ...barToCopy,
    barId: uuid(),
    measure: updateBeatIds(barToCopy.measure),
  };

  return barCopy;
};

// export const copyToNextInArrangement = (barId, previousId, arrangement) => {
//   const barCopy = { barId, arrangementId: uuid() };
//   const previousIndex = arrangement.findIndex(
//     (bar) => bar.arrangementId === previousId
//   );

//   return [
//     ...arrangement.slice(0, previousIndex + 1),
//     barCopy,
//     ...arrangement.slice(previousIndex + 1),
//   ];
// };

export const updateBeat = ({ barId, beatId, beatIndex, newSound }, bars) => {
  const barToUpdate = bars.find((bar) => bar.barId === barId);
  barToUpdate.measure[beatIndex] = barToUpdate.measure[beatIndex].map((part) =>
    part.beatId === beatId ? { ...part, sound: newSound } : part
  );

  return bars.map((bar) => (bar.barId === barId ? barToUpdate : bar));
};
