import React from 'react';
import { majorTriad } from './chords.data';
import { findChords } from './chords.helpers';

const ChordsList = ({ scale, setChordFocus }) => {
  const chords = findChords(scale, majorTriad);

  return (
    <ul>
      {chords.map((chord, i) => (
        <li key={i} onClick={() => setChordFocus(chord)}>
          {chord.name}
        </li>
      ))}
    </ul>
  );
};

export default ChordsList;
