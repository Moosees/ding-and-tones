import { noteNameToValue, intervals } from './intervals.data';

// Remove all the unused information from scales?
const addNoteValues = scale => {
  return scale.map(note => {
    return {
      note,
      noteShort: note.replace(/[0-9]/g, ''),
      noteValue: noteNameToValue[note]
    };
  });
};

const calcInterval = (note, relativeNote) => {
  const noteValueDifference = relativeNote.noteValue - note.noteValue;
  const octaveDifference =
    noteValueDifference < 0 || noteValueDifference > 24
      ? noteValueDifference % 12 === 0
        ? noteValueDifference / 12 - 1
        : Math.floor(noteValueDifference / 12)
      : 0;

  const intervalValue =
    relativeNote.noteValue - note.noteValue - 12 * octaveDifference;

  return {
    ...intervals[intervalValue],
    note: relativeNote.note,
    noteShort: relativeNote.noteShort
  };
};

const addIntervalMap = scaleWithValues => {
  return scaleWithValues.map(note => {
    const intervalList = [];
    const intervalMap = [];
    scaleWithValues.forEach(relativeNote => {
      const currentInterval = calcInterval(note, relativeNote);
      intervalList.push(currentInterval.halfsteps);
      intervalMap.push(currentInterval);
    });
    return { ...note, intervalList, intervalMap };
  });
};

export const createIntervalMap = scale => {
  const scaleWithValues = addNoteValues(scale);
  const scaleWithIntervalMap = addIntervalMap(scaleWithValues);

  return scaleWithIntervalMap;
};
