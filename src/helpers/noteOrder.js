/**
 * Sorts the notes of the scale for easy display around a drumshaped pattern.
 *
 * @param {*} scale unsorted scale with notes in ascending musical order.
 * @returns sorted sclae with notes in circular order around the drum.
 */
export const sortScaleForDisplay = scale => {
  const parsedScale = [];
  const tempScale = [...scale];
  tempScale.forEach((tone, i) => {
    if (i < 2 || i % 2 === 0) {
      parsedScale.push(tone);
      tempScale[i] = undefined;
    }
  });
  tempScale.reverse();
  tempScale.forEach(tone => {
    if (tone) {
      parsedScale.push(tone);
    }
  });
  return parsedScale;
};
