import { v4 as uuid } from 'uuid';

const copyBeats = (measure) => {
  return measure.map((beat) => ({ ...beat, beatId: uuid() }));
};

export const copyBarToEnd = (barId, state) => {
  const newId = uuid();
  const newOrder = [...state.order, newId];
  const newData = { ...state.data, [newId]: { ...state.data[barId] } };
  const newMeasure = {
    ...state.measure,
    [newId]: copyBeats(state.measure[barId]),
  };

  return { newOrder, newData, newMeasure };
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
