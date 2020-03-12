import React, { useState } from 'react';
import { majorTriad } from './chords.data';
import { findChords } from './chords.helpers';

const ChordsList = ({ scale }) => {
  const [chords, setChords] = useState(findChords(scale, majorTriad));

  return (
    <ul>
      {chords.map((chord, i) => (
        <li key={i}>{chord.name}</li>
      ))}
    </ul>
  );
};

export default ChordsList;
