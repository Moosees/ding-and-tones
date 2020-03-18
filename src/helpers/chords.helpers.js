import { noteNameToValue, noteValueToName } from './intervals.data';

const getNotesFromIntervals = (rootNote, intervals) => {
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

const getChordsFromScale = (scale, chord) => {
  const allChords = [];
  const noteCache = [];

  scale.forEach(note => {
    if (!noteCache.includes(note.noteShort)) {
      allChords.push({
        notes: getNotesFromIntervals(note.note, chord.intervals),
        intervals: chord.intervals
      });
      noteCache.push(note.noteShort);
    }
  });

  return allChords;
};

const chordExists = (scale, chord) => {
  let chordExists = true;
  const foundNotes = {};

  chord.notes.forEach((chordNote, i) => {
    let noteExists = false;
    scale.forEach(note => {
      if (chordNote.split('-').includes(note.noteShort)) {
        foundNotes[note.note] = chord.intervals[i];
        noteExists = true;
      }
    });
    if (!noteExists) chordExists = false;
  });

  return chordExists ? foundNotes : null;
};

export const findOneChord = (scale, chord) => {
  const chordsToCheck = getChordsFromScale(scale, chord);
  const foundChords = [];

  chordsToCheck.forEach(currentChord => {
    const foundChord = chordExists(scale, currentChord);
    if (foundChord) {
      const name = `${currentChord.notes[0]} ${chord.name}`;
      const nameShort = `${currentChord.notes[0]}${chord.nameShort}`;
      foundChords.push({
        name,
        nameShort,
        intervals: currentChord.intervals,
        notes: currentChord.notes,
        notesInScale: foundChord
      });
    }
  });

  return foundChords;
};

export const findAllChords = (scale, chordAry) => {
  const foundChords = [];

  chordAry.forEach(chord => {
    const found = findOneChord(scale, chord);
    if (found.length) foundChords.push(...found);
  });
  
  return foundChords;
};
