import React from 'react';
import { connect } from 'react-redux';
import { setDisplayedChord } from '../../../redux/drum/drum.actions';
import ScrollBox from '../../shared/scrollBox/ScrollBox';
import { ListContainer, ListItem } from './list.styles';

const List = ({ displayedChord, setDisplayedChord, foundChords }) => {
  return (
    <ScrollBox>
      <ListContainer>
        {foundChords &&
          foundChords.map((chord, i) => {
            const isDisplayed =
              displayedChord && chord.nameShort === displayedChord.nameShort;
            return (
              <ListItem
                key={i}
                isDisplayed={isDisplayed}
                onClick={() => setDisplayedChord(isDisplayed ? null : chord)}
              >
                {chord.name} ({chord.notes.join('-')})
              </ListItem>
            );
          })}
      </ListContainer>
    </ScrollBox>
  );
};

const mapStateToProps = ({ chords, drum }) => ({
  displayedChord: drum.displayedChord,
  foundChords: chords.foundChords,
});

export default connect(mapStateToProps, {
  setDisplayedChord,
})(List);
