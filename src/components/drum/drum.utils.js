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
