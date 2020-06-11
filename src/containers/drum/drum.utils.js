import { TRANSLATE_BASE } from '../../constants';
import { intervals } from '../../intervals.data';

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
  showIntervals,
  displayedChord
) => {
  // note names
  if (!showIntervals) return intervalMap[noteIndex].note;

  // interval name for scale notes
  if (!displayedChord) return getScaleNoteText(intervalMap[noteIndex]);

  // interval name for chord notes
  return intervals[displayedChord.notesInScale[note]].nameShort;
};

const createRoundLayout = (numTones) => {
  const positionMap = [
    { rotate: 0, translate: 0 },
    { rotate: 0, translate: TRANSLATE_BASE },
  ];
  const spread = 360 / (numTones - 1);
  let startMarker = 1;
  let endMarker = numTones - 2;

  while (startMarker <= endMarker) {
    positionMap.push({
      rotate: spread * startMarker++,
      translate: TRANSLATE_BASE,
    });
    if (startMarker < endMarker)
      positionMap.push({
        rotate: spread * endMarker--,
        translate: TRANSLATE_BASE,
      });
  }
  return positionMap;
};

export const getPositionMap = (layout, numTones) => {
  if (layout === 'round') return createRoundLayout(numTones);
};
