import React from 'react';
import Tonefield from '../tonefield/Tonefield';
import { DrumContainer } from './drum.styles';

// dummy data
const scale = ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'];

/**
 * Sorts the notes of the scale for easy display around a drumshaped pattern.
 *
 * @param {*} scale unsorted scale with notes in ascending musical order.
 * @returns sorted sclae with notes in circular order around the drum.
 */
const parseScale = scale => {
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

const Drum = () => {
  const tonefields = parseScale(scale).map((note, i) => {
    const pos = (360 / (scale.length - 1)) * (i - 1);
    return <Tonefield key={note} tone={note} isDing={i === 0} position={pos} />;
  });

  return (
    <DrumContainer viewBox="-10 -10 20 20">
      <circle r="10" cx="0" cy="0" fill="grey" />
      {tonefields}
    </DrumContainer>
  );
};
export default Drum;
