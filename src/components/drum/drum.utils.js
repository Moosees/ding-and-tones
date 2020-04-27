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

const createRoundLayout = (numTones) => {
  const positionMap = [0, 0];
  const spread = 360 / (numTones - 1);
  let startMarker = 1;
  let endMarker = numTones - 2;

  while (startMarker <= endMarker) {
    positionMap.push(spread * startMarker++, spread * endMarker--);
  }

  return positionMap;
};

export const getPositionMap = (layout, numTones) => {
  if (layout === 'round') return createRoundLayout(numTones);
};
