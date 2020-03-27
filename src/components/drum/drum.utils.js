import { intervals } from '../../intervals.data';

export const getTonefieldText = (note, chordFocus) => {
  if (!chordFocus || chordFocus.notes.includes(note.noteShort)) {
    return note.note;
  } else {
    return '';
  }
};

export const getTonefieldColor = (note, chordFocus) => {
  if (!chordFocus) return '#222';
  if (chordFocus.notes.includes(note.noteShort)) {
    const interval = intervals[chordFocus.notesInScale[note.note]];
    return interval.color;
  } else {
    return '#666';
  }
};
