import { noteNameToValue, noteValueToName } from './intervals.data';
/**
 * Get the notes that builds a specific chord
 *
 * @param {*} rootNote root note of chord
 * @param {*} intervals chord interval array
 * @returns an array of notes in a chord
 */
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
/**
 * Builds chords with root notes derived for each of the notes in the scale
 *
 * @param {*} scale scale to use for bulding chords
 * @param {*} chord chord to use for building chords
 * @returns array of chords with root notes from all notes in scale
 */
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
/**
 * Search a scale for a specific chord with a specific root note
 *
 * @param {*} scale the scale where we want to find the chord
 * @param {*} chord the chord we want to find
 * @returns the chord we found, else null
 */
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
/**
 * Search a scale for a specific chord no matter the root note
 *
 * @param {*} scale the scale where we want to find the chords
 * @param {*} chord the chord we want to find
 * @returns an array of found chords or an empty array
 */
const findOneChord = (scale, chord) => {
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

// sort based on root note of scale?
const sortChords = chords => {
  return chords.sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Searches the scale provided for matches on any of the chords provided
 *
 * @param {*} scale the scale where we want to find the chords
 * @param {*} chordAry an array of chords we wish to search for
 * @returns an array of found chords, or an empty array
 */
export const findAllChords = (scale, chordAry) => {
  const foundChords = [];

  chordAry.forEach(chord => {
    const found = findOneChord(scale, chord);
    if (found.length) foundChords.push(...found);
  });

  return sortChords(foundChords);
};
