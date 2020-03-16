import React from 'react';
import { chordList } from '../../helpers/chords.data';
import { findAllChords } from '../../helpers/chords.helpers';

const ChordsList = ({ scale, setChordFocus }) => {
  const chords = findAllChords(scale, chordList);

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

export default React.memo(ChordsList);
