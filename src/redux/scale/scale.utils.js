import {
  intervals,
  noteNameToValue,
  noteValueToName,
} from '../../intervals.data';

// const addNoteNamesFromValues = (scale) => {
//   return scale.map((noteValue) => {
//     const note = noteValueToName(noteValue);
//     return {
//       note,
//       noteShort: note.replace(/[0-9]/g, ''),
//       noteValue,
//     };
//   });
// };

const addNoteValuesFromNames = (scale) => {
  return scale.map((note) => {
    return {
      note,
      noteShort: note.replace(/[0-9]/g, ''),
      noteValue: noteNameToValue[note],
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
    noteShort: relativeNote.noteShort,
  };
};

const addIntervalMap = (scaleWithValues) => {
  return scaleWithValues.map((note) => {
    const intervalList = [];
    const intervalMap = [];
    scaleWithValues.forEach((relativeNote) => {
      const currentInterval = calcInterval(note, relativeNote);
      intervalList.push(currentInterval.semitones);
      intervalMap.push(currentInterval);
    });
    return { ...note, intervalList, intervalMap };
  });
};

export const createFullScaleFromNames = (scale) => {
  const scaleWithValues = addNoteValuesFromNames(scale);
  const scaleFull = addIntervalMap(scaleWithValues);

  return scaleFull;
};

export const transposeScale = (scale, destination = 0) => {
  console.log({ scale });
  return scale.map((note) => {
    const newValue = noteNameToValue[note] + destination;
    return noteValueToName[newValue];
  });
};

export const removeSharps = (scale) => {
  return scale.map((note) => {
    const noteValue = noteNameToValue[note];
    return noteValueToName[noteValue];
  });
};

export const removeDuplicateNotes = (scale) => {
  return [...new Set(scale)];
};

export const sortScale = (scale) => {
  return scale.sort((a, b) => noteNameToValue[a] - noteNameToValue[b]);
};
