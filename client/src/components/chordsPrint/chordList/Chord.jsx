import React from 'react';
import MiniDrum from '../../drum/MiniDrum';
import { ChordContainer } from './chordList.styles';

const Chord = ({ chord }) => {
  return (
    <ChordContainer>
      <h3>{chord.name}</h3>
      <h4>{chord.notes.join(', ')}</h4>
      <MiniDrum showNoteList={chord.notes} />
    </ChordContainer>
  );
};

export default Chord;
