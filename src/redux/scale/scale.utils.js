import { intervals, noteNameToValue } from '../../intervals.data';

/**
 * Sorts the notes of the scale for easy display around a drumshaped pattern.
 *
 * @param {*} scale unsorted scale with notes in ascending musical order.
 * @returns sorted sclae with notes in circular order around the drum.
 */
export const sortScaleForDrum = (scale) => {
  const sortedScale = [];
  const tempScale = [...scale];
  tempScale.forEach((tone, i) => {
    if (i < 2 || i % 2 === 0) {
      sortedScale.push(tone);
      tempScale[i] = undefined;
    }
  });
  tempScale.reverse();
  tempScale.forEach((tone) => {
    if (tone) {
      sortedScale.push(tone);
    }
  });
  return sortedScale;
};

// Remove all the unused information from scales?
const addNoteValues = (scale) => {
  return scale.map((note) => {
    return {
      note,
      noteShort: note.replace(/[0-9]/g, ''),
      noteValue: noteNameToValue[note],
    };
  });
};

const calcInterval = (note, relativeNote) => {
  const noteValueDifference = relativeNote.noteValue - note.noteValue;
  const octaveDifference =
    noteValueDifference < 0 || noteValueDifference > 24
      ? noteValueDifference % 12 === 0
        ? noteValueDifference / 12 - 1
        : Math.floor(noteValueDifference / 12)
      : 0;

  const intervalValue =
    relativeNote.noteValue - note.noteValue - 12 * octaveDifference;

  return {
    ...intervals[intervalValue],
    note: relativeNote.note,
    noteShort: relativeNote.noteShort,
  };
};

const addIntervalMap = (scaleWithValues) => {
  return scaleWithValues.map((note) => {
    const intervalList = [];
    const intervalMap = [];
    scaleWithValues.forEach((relativeNote) => {
      const currentInterval = calcInterval(note, relativeNote);
      intervalList.push(currentInterval.halfsteps);
      intervalMap.push(currentInterval);
    });
    return { ...note, intervalList, intervalMap };
  });
};

export const createFullScale = (scale) => {
  const scaleWithValues = addNoteValues(scale);
  const scaleWithIntervalMap = addIntervalMap(scaleWithValues);

  return sortScaleForDrum(scaleWithIntervalMap);
};
