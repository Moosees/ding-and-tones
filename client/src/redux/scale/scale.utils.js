import {
  MAX_NOTE_VALUE,
  MIN_NOTE_VALUE,
  TRANSLATE_BASE,
} from '../../assets/constants';
import {
  convertFlatToSharp,
  convertShortFlatToSharp,
  getNoteLabelFromName,
  noteNameToValue,
  noteValueToName,
} from '../../assets/intervals';

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

const addIntervalMap = (scale) => {
  return scale.map((note) => {
    const intervalMap = [];

    scale.forEach((relativeNote) => {
      const currentInterval = addIntervalData(note, relativeNote);
      intervalMap.push(currentInterval);
    });

    return { ...note, intervalMap };
  });
};

const sortScaleByNoteValue = (scale) => {
  return scale.sort((a, b) => a.noteValue - b.noteValue);
};

const addRootAndPosition = (scale, sharpNotes) => {
  let rootFound = false;
  let rootIndex = 0;
  let rootValue = 36;
  let rootName = 'C';

  const scaleWithPos = scale.map((scaleNote, i) => {
    const { note, noteShort, noteValue, type } = scaleNote;

    let isRoot = false;

    if (!rootFound && ['dings', 'round'].includes(type)) {
      isRoot = true;
      rootFound = true;
      rootIndex = i;
      rootValue = noteValue;
      rootName = getNoteLabelFromName(
        noteValueToName[noteValue],
        sharpNotes
      ).slice(0, -1);
    }

    return {
      ...scaleNote,
      isRoot,
      noteSharp: convertFlatToSharp(note),
      noteSharpShort: convertShortFlatToSharp(noteShort),
    };
  });

  return { rootInfo: { rootIndex, rootValue, rootName }, scaleWithPos };
};

export const createFullScaleFromNames = (
  { dings, round = [], extra = [] },
  sharpNotes
) => {
  if (!dings || !dings.length) return [];

  const dingsWithValues = addNoteValueFromName(
    dings.map((note, i) => ({
      note,
      localIndex: i,
      option: `${i}`,
      type: 'dings',
    }))
  );

  const roundWithValues = addNoteValueFromName(
    round.map((note, i) => ({
      note,
      localIndex: i + dings.length,
      option: `${i + dings.length}`,
      type: 'round',
    }))
  );

  const extraWithValues = addNoteValueFromName(
    extra.map((note, i) => ({
      ...note,
      localIndex: i,
      option: `b${i + 1}`,
      type: 'extra',
    }))
  );

  const sortedScale = sortScaleByNoteValue([
    ...dingsWithValues,
    ...roundWithValues,
    ...extraWithValues,
  ]);

  const { rootInfo, scaleWithPos } = addRootAndPosition(
    sortedScale,
    sharpNotes
  );

  const pitched = addIntervalMap(scaleWithPos);

  return { rootInfo, pitched };
};

export const parseScaleData = (scale, suppressAlert) => {
  const { info, isOwner, scaleId, notes } = scale;

  const roundMerged = [...notes.dings, ...notes.round];

  const positions = createPositionMap(info.layout, roundMerged.length);
  const { pitched, rootInfo } = createFullScaleFromNames(
    notes,
    info.sharpNotes
  );

  const parsedScaleData = {
    notes,
    parsed: { positions, pitched },
    info: { ...info, ...rootInfo },
    isOwner,
    scaleId,
  };

  if (!suppressAlert)
    parsedScaleData.alert = `"${scale.info.rootName} ${scale.info.name}" loaded`;

  return parsedScaleData;
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

export const createScaleLabel = (
  { dings, round = [], extra = [] },
  sharpNotes
) => {
  if (!dings || !dings.length) return '';

  const extraLabels = extra.map(({ note }) =>
    getNoteLabelFromName(note, sharpNotes)
  );

  const dingLabels = dings.map((note, i) => {
    const label = getNoteLabelFromName(note, sharpNotes);

    return i === 0 ? `(${label})` : label;
  });

  const roundLabels = round.map((note) =>
    getNoteLabelFromName(note, sharpNotes)
  );

  return [...extraLabels, ...dingLabels, ...roundLabels].join(' ');
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
