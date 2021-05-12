import {
  MAX_NOTE_VALUE,
  MIN_NOTE_VALUE,
  TRANSLATE_BASE,
} from '../../assets/constants';
import { noteNameToValue, noteValueToName } from '../../assets/intervals';

export const addExtraNotesPos = (sortedScale) => {
  return sortedScale.map((note, i) => ({ note, pos: i }));
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
      ...note,
      noteShort: note.note.replace(/[0-9]/g, ''),
      noteValue: noteNameToValue[note.note],
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
    const intervalMap = [];

    scaleWithValues.forEach((relativeNote) => {
      const currentInterval = addIntervalData(note, relativeNote);
      intervalMap.push(currentInterval);
    });

    return { ...note, intervalMap };
  });
};

const sortScaleByNoteValue = (scale) => {
  return scale.sort((a, b) => a.noteValue - b.noteValue);
};

const addRootAndPosition = (scale) => {
  let rootFound = false;

  return scale.map((note) => {
    const isExtra = note.pos >= 0;

    if (!rootFound && !isExtra) {
      rootFound = true;
      return { ...note, isRoot: true, isExtra };
    }
    return { ...note, isRoot: false, isExtra };
  });
};

export const createFullScaleFromNames = (round, extra) => {
  if (!round.length) return [];

  const roundWithValues = addNoteValueFromName(round.map((note) => ({ note })));
  const extraWithValues = addNoteValueFromName(extra);
  const sortedScale = sortScaleByNoteValue([
    ...roundWithValues,
    ...extraWithValues,
  ]);
  const scaleMapped = addIntervalMap(sortedScale);
  const scaleFull = addRootAndPosition(scaleMapped);

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

export const createScaleLabel = (extra, round) => {
  const extraLabel = extra.length
    ? `${extra.map(({ note }) => note).join(' ')} `
    : '';
  if (round.length === 0) return '';
  if (round.length === 1) return `${extraLabel}(${round[0]})`;
  return `${extraLabel}(${round[0]}) ${round.slice(1).join(' ')}`;
};

export const parseNotesForSaveScale = ({ round, extra }) => ({
  dings: [round[0]],
  round: round.slice(1),
  extra,
});

export const transposeRoundToDestination = (scale, destination = 0) => {
  return scale
    .map((note) => {
      const newValue = noteNameToValue[note] + destination;
      return newValue >= MIN_NOTE_VALUE && newValue <= MAX_NOTE_VALUE
        ? noteValueToName[newValue]
        : null;
    })
    .filter((note) => note);
};

export const transposeExtraToDestination = (scale, destination = 0) => {
  return scale
    .map((note) => {
      const newValue = noteNameToValue[note.note] + destination;
      return newValue >= MIN_NOTE_VALUE && newValue <= MAX_NOTE_VALUE
        ? { ...note, note: noteValueToName[newValue] }
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

const createRoundLayout = (numTones) => {
  const positionMap = [
    { rotate: 0, translate: 0 },
    { rotate: 0, translate: TRANSLATE_BASE },
  ];
  const spread = 360 / (numTones - 1);
  let startMarker = 1;
  let endMarker = numTones - 2;

  while (startMarker <= endMarker) {
    positionMap.push({
      rotate: spread * startMarker++,
      translate: TRANSLATE_BASE,
    });
    if (startMarker < endMarker)
      positionMap.push({
        rotate: spread * endMarker--,
        translate: TRANSLATE_BASE,
      });
  }
  return positionMap;
};

export const createPositionMap = (layout, numTones) => {
  if (layout === 1) return createRoundLayout(numTones);
};
