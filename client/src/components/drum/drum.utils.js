import { drumModes, intervals } from '../../assets/intervals';

export const getChordColor = (note, notesInScale) => {
  return intervals[notesInScale[note]].color;
};

export const getNoteColor = (noteIndex, intervalMap) => {
  const currentNote = intervalMap[noteIndex];

  // currently only uses compound interval colors
  const currentInterval = currentNote.compound;

  return currentNote.semitones < 0
    ? intervals[currentInterval].colorInverted
    : intervals[currentInterval].color;
};

const getScaleNoteText = (interval) => {
  const { compound, semitones } = interval;

  if (semitones > 24) return `${intervals[compound].nameShort}+`;

  if (semitones < -12) return `${intervals[compound].invertedShort}-`;

  return semitones < 0
    ? intervals[compound].invertedShort
    : intervals[semitones].nameShort;
};

export const getNoteText = (
  note,
  noteIndex,
  intervalMap,
  drumMode,
  displayedChord,
  noteNumber
) => {
  switch (drumMode) {
    case drumModes.INTERVALS:
      if (displayedChord)
        return intervals[displayedChord.notesInScale[note]].nameShort;

      return getScaleNoteText(intervalMap[noteIndex]);

    case drumModes.NOTES:
      return intervalMap[noteIndex].note;

    case drumModes.NUMBERS:
      return noteNumber;

    default:
      return intervalMap[noteIndex].note;
  }
};
