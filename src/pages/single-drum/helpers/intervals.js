import { absNoteValues, intervals } from './intervals.data';

const addNoteValues = scale => {
  return scale.map(note => {
    return {
      note,
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

  // helpful logs for tweaking the design of the interval map
  // console.log({
  //   note: relativeNote.note,
  //   val: note.noteValue,
  //   rel: relativeNote.noteValue,
  //   octaveDifference
  // });

  const intervalValue =
    relativeNote.noteValue - note.noteValue - 12 * octaveDifference;

  // console.log(intervals[intervalValue]);
  // console.log('----------------');

  return { ...intervals[intervalValue], note: relativeNote.note };
};

export const createIntervalMap = scale => {
  const scaleWithValues = addNoteValues(scale);
  const intervalMap = scaleWithValues.map(note => {
    const intervalsList = [];
    scaleWithValues.forEach(relativeNote => {
      intervalsList.push(calcInterval(note, relativeNote));
    });
    // console.log('***************');
    return { ...note, intervalsList };
  });

  return intervalMap;
};
