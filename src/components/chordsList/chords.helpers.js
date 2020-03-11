import { intervals } from '../../pages/single-drum/helpers/intervals.data';

// Lessons learned. Needs a way to get unique name for chord, maybe IDs?
// Also needs a better aproach for logic.
// Create a intervals overview for each note in the scale and use that instead.
const checkIntervals = (intervalsList, chord) => {
  console.log({ intervalsList, chord });

  let chordExists = true;
  let intervalMatches = false;
  chord.intervals.forEach(chordInterval => {
    if (!chordExists) return undefined;

    intervalMatches = false;

    intervalsList.forEach(scaleInterval => {
      if (intervals[chordInterval].shortName === scaleInterval.shortName) {
        intervalMatches = true;
      }
    });
    chordExists = intervalMatches;
    console.log({ chordExists, intervalMatches });
  });

  return chordExists
    ? { name: `${intervalsList[0].name} ${chord.name}` }
    : undefined;
};

export const findChords = (scale, chord) => {
  const foundChords = [];
  console.log({ scale });
  scale.forEach(note => {
    const found = checkIntervals(note.intervalsList, chord);
    if (found) {
      console.log({ found });
      foundChords.push(found);
    }
  });
  return foundChords;
};
