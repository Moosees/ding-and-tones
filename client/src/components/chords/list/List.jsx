import React from 'react';
import { connect } from 'react-redux';
import { setDisplayedChord } from '../../../redux/drum/drum.actions';
import { ListContainer, ListItem, WrapBox } from './list.styles';

const List = ({ displayedChord, setDisplayedChord, foundChords }) => {
  return (
    <WrapBox>
      <ListContainer>
        {foundChords &&
          foundChords.map((chord, i) => {
            const isDisplayed =
              displayedChord && chord.nameShort === displayedChord.nameShort;
            return (
              <ListItem
                tabIndex={0}
                key={i}
                isDisplayed={isDisplayed}
                onClick={() => setDisplayedChord(isDisplayed ? null : chord)}
              >
                {chord.name} ({chord.notes.join('-')})
              </ListItem>
            );
          })}
      </ListContainer>
    </WrapBox>
  );
};

const mapStateToProps = ({ chords, drum }) => ({
  displayedChord: drum.displayedChord,
  foundChords: chords.foundChords,
});

export default connect(mapStateToProps, {
  setDisplayedChord,
})(List);
