import React from 'react';
import { connect } from 'react-redux';
import { addChordToPrintList } from '../../../redux/chords/chords.actions';
import { setDisplayedChord } from '../../../redux/drum/drum.actions';
import { ItemContainer } from './list.styles';

const ListItem = ({
  addChordToPrintList,
  chord,
  isDisplayed,
  setDisplayedChord,
}) => {
  return (
    <ItemContainer>
      <button onClick={() => setDisplayedChord(isDisplayed ? null : chord)}>
        Show on drum
      </button>
      <button onClick={() => addChordToPrintList(chord)}>Add to print</button>
      <span>{chord.name}</span>
      <span>{chord.notes.join('-')}</span>
    </ItemContainer>
  );
};

export default connect(null, { addChordToPrintList, setDisplayedChord })(
  ListItem
);
