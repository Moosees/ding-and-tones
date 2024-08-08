import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNoteLabelFromName } from '../../../assets/intervals';
import useDimensions from '../../../hooks/useDimensions';
import {
  addChordToPrintList,
  removeChordFromPrintList,
} from '../../../redux/chords/chords.slice';
import { setDisplayedChord } from '../../../redux/drum/drum.actions';
import Checkbox from '../../shared/checkbox/Checkbox';
import { ItemContainer } from './list.styles';

const ListItem = ({ chord, isDisplayed }) => {
  const dispatch = useDispatch();
  const printList = useSelector(({ chords }) => chords.printList);
  const sharpNotes = useSelector(({ scale }) => scale.info.sharpNotes);

  const { isMobile } = useDimensions();

  const chordIsInPrintList = !printList.every(
    ({ nameShort }) => nameShort !== chord.nameShort,
  );

  const handleChordClick = () => {
    chordIsInPrintList
      ? dispatch(removeChordFromPrintList({ chord }))
      : dispatch(addChordToPrintList({ chord }));
  };

  const chordName = sharpNotes ? chord.nameSharp : chord.name;

  const chordNotes = chord.notes
    .map((note) => getNoteLabelFromName(`${note}1`, sharpNotes).slice(0, -1))
    .join(', ');

  return (
    <ItemContainer>
      <span>
        <strong>{chordName}</strong> - {chordNotes}
      </span>
      <div>
        <Checkbox
          label="View"
          checked={isDisplayed}
          onChange={() =>
            dispatch(setDisplayedChord(isDisplayed ? null : chord))
          }
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

export default ListItem;
