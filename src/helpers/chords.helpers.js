import { noteNameToValue, noteValueToName } from './intervals.data';

const getChordNotes = (rootNote, intervals) => {
  const rootNoteValue = noteNameToValue[rootNote];
  const chordNotes = [];

  intervals.forEach(interval => {
    const note = noteValueToName[rootNoteValue + interval].replace(
      /[0-9]/g,
      ''
    );
    chordNotes.push(note);
  });

  return chordNotes;
};

const getAllChords = (scale, chord) => {
  const allChords = [];
  const noteCache = [];

  scale.forEach(note => {
    if (!noteCache.includes(note.noteShort)) {
      allChords.push({
        notes: getChordNotes(note.note, chord.intervals),
        intervals: chord.intervals
      });
      noteCache.push(note.noteShort);
    }
  });

  return allChords;
};

const chordExists = (scale, chord, name) => {
  let chordExists = true;
  const foundNotes = [];

  chord.notes.forEach((chordNote, i) => {
    let noteExists = false;
    scale.forEach(note => {
      if (chordNote.split('-').includes(note.noteShort)) {
        foundNotes.push({ [note.note]: chord.intervals[i] });
        noteExists = true;
      }
    });
    if (!noteExists) chordExists = false;
  });

  return chordExists
    ? { foundNotes, chord, name: `${chord.notes[0]} ${name}` }
    : null;
};

export const findChords = (scale, chord) => {
  const chordsToCheck = getAllChords(scale, chord);
  const foundChords = [];

  chordsToCheck.forEach(currentChord => {
    const foundChord = chordExists(scale, currentChord, chord.name);
    if (foundChord) {
      foundChords.push(foundChord);
    }
  });

  return foundChords;
};
