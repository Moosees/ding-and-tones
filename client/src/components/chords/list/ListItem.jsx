import React from 'react';
import { connect } from 'react-redux';
import { getNoteLabelFromName } from '../../../assets/intervals';
import useDimensions from '../../../hooks/useDimensions';
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
  sharpNotes,
}) => {
  const { isMobile } = useDimensions();

  const chordIsInPrintList = !printList.every(
    ({ nameShort }) => nameShort !== chord.nameShort
  );

  const handleChordClick = () => {
    chordIsInPrintList
      ? removeChordFromPrintList(chord)
      : addChordToPrintList(chord);
  };

  const chordNotes = chord.notes
    .map((note) => getNoteLabelFromName(`${note}1`, sharpNotes).slice(0, -1))
    .join(', ');

  return (
    <ItemContainer>
      <span>
        <strong>{chord.name}</strong> - {chordNotes}
      </span>
      <div>
        <Checkbox
          label="View"
          checked={isDisplayed}
          onChange={() => setDisplayedChord(isDisplayed ? null : chord)}
        />
        <Checkbox
          label={isMobile ? 'Print' : 'Print list'}
          checked={chordIsInPrintList}
          onChange={handleChordClick}
        />
      </div>
    </ItemContainer>
  );
};

const mapStateToProps = ({ chords, scale }) => ({
  printList: chords.printList,
  sharpNotes: scale.info.sharpNotes,
});

export default connect(mapStateToProps, {
  addChordToPrintList,
  removeChordFromPrintList,
  setDisplayedChord,
})(ListItem);
