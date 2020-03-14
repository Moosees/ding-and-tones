import { absNoteValues, intervals } from './intervals.data';

const addNoteValues = scale => {
  return scale.map(note => {
    return {
      note,
      noteShort: note.replace(/[0-9]/g, ''),
      noteValue: absNoteValues[note]
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
    note: relativeNote.currentNote,
    noteShort: relativeNote.currentNoteShort
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
