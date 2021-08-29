import React from 'react';
import { getNoteLabelFromName } from '../../../assets/intervals';
import MiniDrum from '../../drum/MiniDrum';
import { ChordContainer } from './chordList.styles';

const Chord = ({ chord, sharpNotes }) => {
  const name = sharpNotes ? chord.nameSharp : chord.name;
  const chordNotes = chord.notes
    .map((note) => getNoteLabelFromName(`${note}1`, sharpNotes).slice(0, -1))
    .join(', ');

  return (
    <ChordContainer>
      <h3>{name}</h3>
      <h4>{chordNotes}</h4>
      <MiniDrum showNoteList={chord.notes} />
    </ChordContainer>
  );
};

export default Chord;
