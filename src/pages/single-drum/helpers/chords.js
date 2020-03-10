import { absNoteValues, intervals } from './intervals';

const addNoteValues = scale => {
  return scale.map(note => {
    return {
      note,
      noteValue: absNoteValues[note]
    };
  });
};

export const createIntervalMap = scale => {
  const scaleWithValues = addNoteValues(scale);
  const intervalMap = scaleWithValues.map(note => {
    const intervalsList = [];
    scaleWithValues.forEach(relativeNote => {
      intervalsList.push(intervals[note.noteValue - relativeNote.noteValue]);
    });
    return { ...note, intervalsList };
  });

  return intervalMap;
};
