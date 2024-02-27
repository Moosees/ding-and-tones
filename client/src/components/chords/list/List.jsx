import React from 'react';
import { useSelector } from 'react-redux';
import ScrollBox from '../../shared/scrollBox/ScrollBox';
import ListItem from './ListItem';

const List = () => {
  const displayedChord = useSelector(({ drum }) => drum.displayedChord);
  const foundChords = useSelector(({ chords }) => chords.foundChords);

  return (
    <ScrollBox>
      {foundChords &&
        foundChords.map((chord, i) => {
          const isDisplayed =
            displayedChord && chord.nameShort === displayedChord.nameShort;

          return <ListItem key={i} isDisplayed={isDisplayed} chord={chord} />;
        })}
    </ScrollBox>
  );
};

export default List;
