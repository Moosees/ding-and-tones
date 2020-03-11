import React, { useState } from 'react';
import { majorTriad } from './chords.data';
import { findChords } from './chords.helpers';

const ChordsList = ({ scale }) => {
  const [chords, setChords] = useState([findChords(scale, majorTriad)]);
  console.log({chords});

  return (
    <ul>
      {chords.map(chord => (
        <li key={chord.name}>{chord.name}</li>
      ))}
    </ul>
  );
};

export default ChordsList;
