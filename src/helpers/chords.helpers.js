// Function needs a way to tie chords to scale instead of just arbitrary intervals.
// Also a better way to handle scales over several octaves.
// Displaytests show we need to change the chord objects for easier display.
const checkIntervals = (note, chord) => {
  let chordExists = true;

  chord.intervals.forEach(interval => {
    if (!note.intervalList.includes(interval)) chordExists = false;
  });

  return chordExists
    ? {
        intervals: chord.intervals,
        name: `${note.noteShort} ${chord.name}`
      }
    : undefined;
};

// Needs to handle duplicates of the same chord in some way.
export const findChords = (scale, chord) => {
  const foundChords = [];
  scale.forEach((note, i) => {
    const found = checkIntervals(note, chord);
    if (found) {
      foundChords.push({ ...found, scaleIndex: i });
    }
  });
  return foundChords;
};
