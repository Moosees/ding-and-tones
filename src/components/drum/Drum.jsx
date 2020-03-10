import React from 'react';
import Tonefield from '../tonefield/Tonefield';
import { DrumContainer } from './drum.styles';

const Drum = ({ scale }) => {
  const tonefields = scale.map((note, i) => {
    const pos = (360 / (scale.length - 1)) * (i - 1);
    return (
      <Tonefield
        key={note.note}
        note={note}
        isDing={i === 0}
        position={pos}
        color={scale[0].intervalsList[i].color}
      />
    );
  });

  return (
    <DrumContainer viewBox="-10 -10 20 20">
      <circle r="10" cx="0" cy="0" fill="grey" />
      {tonefields}
    </DrumContainer>
  );
};
export default Drum;
