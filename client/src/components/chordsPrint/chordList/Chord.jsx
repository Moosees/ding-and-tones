import React from 'react';
import MiniDrum from '../../drum/MiniDrum';
import { ChordContainer } from './chordList.styles';

const Chord = () => {
  return (
    <ChordContainer>
      <div>Chord Name</div>
      <MiniDrum />
      <div>Intervals in chord</div>
    </ChordContainer>
  );
};

export default Chord;
