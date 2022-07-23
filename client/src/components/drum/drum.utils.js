import {
  drumModes,
  getNoteLabelFromName,
  intervals,
} from '../../assets/intervals';

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

  const isOctave = semitones % 12 === 0 && semitones !== 0;

  return intervals[isOctave ? 12 : compound].nameShort;
};

export const getNoteText = (
  noteName,
  scaleFullIndex,
  intervalMap,
  drumMode,
  displayedChord,
  option,
  sharpNotes
) => {
  switch (drumMode) {
    case drumModes.INTERVALS:
      if (displayedChord)
        return intervals[displayedChord.notesInScale[noteName]].nameShort;

      return getScaleNoteText(intervalMap[scaleFullIndex]);

    case drumModes.NOTES:
      return getNoteLabelFromName(noteName, sharpNotes);

    case drumModes.NUMBERS:
      return option;

    default:
      return noteName;
  }
};
