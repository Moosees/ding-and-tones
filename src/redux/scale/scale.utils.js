import { noteNameToValue, noteValueToName } from '../../intervals.data';

// const addNoteNameFromValue = (scale) => {
//   return scale.map((noteValue) => {
//     const note = noteValueToName(noteValue);
//     return {
//       note,
//       noteShort: note.replace(/[0-9]/g, ''),
//       noteValue,
//     };
//   });
// };

const addNoteValueFromName = (scale) => {
  return scale.map((note) => {
    return {
      note,
      noteShort: note.replace(/[0-9]/g, ''),
      noteValue: noteNameToValue[note],
    };
  });
};

const addIntervalData = (note, relativeNote) => {
  const noteValueDifference = relativeNote.noteValue - note.noteValue;
  const octaveDifference = Math.floor(noteValueDifference / 12);
  const intervalValue = noteValueDifference - octaveDifference * 12;

  return {
    semitones: noteValueDifference,
    octaves: octaveDifference,
    compound: intervalValue,
    note: relativeNote.note,
    noteShort: relativeNote.noteShort,
  };
};

const addIntervalMap = (scaleWithValues) => {
  return scaleWithValues.map((note) => {
    const intervalList = [];
    const intervalMap = [];

    scaleWithValues.forEach((relativeNote) => {
      const currentInterval = addIntervalData(note, relativeNote);
      intervalList.push(currentInterval.semitones);
      intervalMap.push(currentInterval);
    });

    return { ...note, intervalList, intervalMap };
  });
};

export const createFullScaleFromNames = (scale) => {
  const scaleWithValues = addNoteValueFromName(scale);
  const scaleFull = addIntervalMap(scaleWithValues);

  return scaleFull;
};

export const transposeScale = (scale, destination = 0) => {
  return scale
    .map((note) => {
      const newValue = noteNameToValue[note] + destination;
      return noteValueToName[newValue];
    })
    .filter((note) => note);
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

export const sortScaleByFreq = (scale) => {
  return scale.sort((a, b) => noteNameToValue[a] - noteNameToValue[b]);
};
