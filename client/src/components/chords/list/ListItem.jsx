import React from 'react';
import { connect } from 'react-redux';
import {
  addChordToPrintList,
  removeChordFromPrintList,
} from '../../../redux/chords/chords.actions';
import { setDisplayedChord } from '../../../redux/drum/drum.actions';
import Checkbox from '../../shared/checkbox/Checkbox';
import { ItemContainer } from './list.styles';

const ListItem = ({
  addChordToPrintList,
  chord,
  isDisplayed,
  printList,
  removeChordFromPrintList,
  setDisplayedChord,
}) => {
  const chordIsInPrintList = !printList.every(
    ({ nameShort }) => nameShort !== chord.nameShort
  );

  const handleChordClick = () => {
    chordIsInPrintList
      ? removeChordFromPrintList(chord)
      : addChordToPrintList(chord);
  };

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
          onChange={handleChordClick}
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
  removeChordFromPrintList,
  setDisplayedChord,
})(ListItem);
