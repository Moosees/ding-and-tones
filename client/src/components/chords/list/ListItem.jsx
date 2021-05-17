import React from 'react';
import { connect } from 'react-redux';
import { addChordToPrintList } from '../../../redux/chords/chords.actions';
import { setDisplayedChord } from '../../../redux/drum/drum.actions';
import Checkbox from '../../shared/checkbox/Checkbox';
import { ItemContainer } from './list.styles';

const ListItem = ({
  addChordToPrintList,
  chord,
  isDisplayed,
  printList,
  setDisplayedChord,
}) => {
  const chordIsInPrintList = !printList.every(
    ({ nameShort }) => nameShort !== chord.nameShort
  );

  return (
    <ItemContainer>
      <span>
        <strong>{chord.name}</strong> - {chord.notes.join(', ')}
      </span>
      <div>
        <Checkbox
          label="View"
          checked={isDisplayed}
          onChange={() => setDisplayedChord(isDisplayed ? null : chord)}
        />
        <Checkbox
          label="Print list"
          checked={chordIsInPrintList}
          onChange={() => addChordToPrintList(chord)}
        />
      </div>
    </ItemContainer>
  );
};

const mapStateToProps = ({ chords }) => ({
  printList: chords.printList,
});

export default connect(mapStateToProps, {
  addChordToPrintList,
  setDisplayedChord,
})(ListItem);
