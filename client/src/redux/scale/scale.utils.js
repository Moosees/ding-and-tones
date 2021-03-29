import { MAX_NOTE_VALUE, MIN_NOTE_VALUE } from '../../assets/constants';
import { noteNameToValue, noteValueToName } from '../../assets/intervals';

export const addMutantPos = (sortedScale) => {
  return sortedScale.map((note, i) => ({ note, pos: `A${i + 1}` }));
};

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

export const createFullScaleFromNames = (round, mutant) => {
  if (!round.length) return [];

  const roundWithValues = addNoteValueFromName(round);
  const mutantWithValues = addNoteValueFromName(mutant.map(({ note }) => note));
  const scaleFull = addIntervalMap([...roundWithValues, ...mutantWithValues]);

  return scaleFull;
};

// export const createScaleFromString = (scaleString) => {
//   const scaleAry = scaleString.split(' ');
//   const scaleFlat = removeSharps(scaleAry);
//   const scaleTrimmed = removeDuplicateNotes(scaleFlat);
//   const round = sortScaleByFreq(scaleTrimmed);
//   const scaleFull = createFullScaleFromNames(round);

//   return {
//     name,
//     layout,
//     scale: {
//       round,
//       scaleFull,
//     }
//   };
// };

export const createScaleLabel = (mutant, round) => {
  const mutantLabel = mutant.length
    ? `${mutant.map(({ note }) => note).join(' ')} `
    : '';
  if (round.length === 0) return '';
  if (round.length === 1) return `${mutantLabel}(${round[0]})`;
  return `${mutantLabel}(${round[0]}) ${round.slice(1).join(' ')}`;
};

export const parseNotesForSaveScale = ({ round }) => ({
  dings: [round[0]],
  round: round.slice(1),
});

export const transposeScaleToDestination = (scale, destination = 0) => {
  return scale
    .map((note) => {
      const newValue = noteNameToValue[note] + destination;
      return newValue >= MIN_NOTE_VALUE && newValue <= MAX_NOTE_VALUE
        ? noteValueToName[newValue]
        : null;
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
