import { intervals } from '../../intervals.data';

export const getChordColor = (note, notesInScale) => {
  return intervals[notesInScale[note]].color;
};

export const getNoteColor = (noteIndex, intervalMap) => {
  return intervalMap[noteIndex].color;
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

  // color for scale notes
  if (!displayedChord) return intervalMap[noteIndex].nameShort;

  // color for chord notes
  return intervals[displayedChord.notesInScale[note]].nameShort;
};

const TRANSLATE_BASE = 6.6;

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
