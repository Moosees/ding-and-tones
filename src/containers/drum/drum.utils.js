import { intervals } from '../../intervals.data';

export const getChordColor = (note, chordFocus) => {
  if (chordFocus.notes.includes(note.noteShort)) {
    const interval = intervals[chordFocus.notesInScale[note.note]];
    return interval.color;
  } else {
    return '#666';
  }
};

export const getChordText = (note, chordFocus) => {
  return chordFocus.notes.includes(note.noteShort) ? note.note : '';
};

export const getNoteColor = (noteIndex, intervalMap) => {
  return intervalMap[noteIndex].color;
};

export const getNoteText = (noteIndex, intervalMap, showIntervals) => {
  return showIntervals
    ? intervalMap[noteIndex].shortName
    : intervalMap[noteIndex].note;
};

const TRANSLATE_BASE = 6.6;

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

export const getPositionMap = (layout, numTones) => {
  if (layout === 'round') return createRoundLayout(numTones);
};
