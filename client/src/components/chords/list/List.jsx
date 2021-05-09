import React from 'react';
import { connect } from 'react-redux';
import ScrollBox from '../../shared/scrollBox/ScrollBox';
import ListItem from './ListItem';

const List = ({ displayedChord, setDisplayedChord, foundChords }) => {
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

const mapStateToProps = ({ chords, drum }) => ({
  displayedChord: drum.displayedChord,
  foundChords: chords.foundChords,
});

export default connect(mapStateToProps)(List);
