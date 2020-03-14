import React from 'react';
import Tonefield from '../tonefield/Tonefield';
import { DrumContainer } from './drum.styles';

const Drum = ({ scale, chordFocus }) => {
  console.log(chordFocus);
  console.log({ scale });

  const tonefields = scale.map((note, i) => {
    const pos = (360 / (scale.length - 1)) * (i - 1);

    return (
      <Tonefield
        key={note.note}
        note={note}
        isDing={i === 0}
        position={pos}
        text={chordFocus ? 'Chord' : note.note}
        color={chordFocus ? '#F00' : '#222'}
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
