import React, { memo } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setDisplayedChord } from '../../redux/drum/drum.actions';

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li`
  background-color: rgba(0, 0, 0, 0.03);
  border: ${({ isDisplayed }) =>
    isDisplayed ? '1px solid #0f0' : '1px solid rgba(200,0,0,0.2)'};
  border-radius: 3px;
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  list-style: none;
  margin: 0.5rem;
  padding: 0.5rem;
  transition: border 0.15s ease-in;

  &:hover {
    border: ${({ isDisplayed }) =>
      isDisplayed ? '1px solid #800' : '1px solid rgba(0,200,0,0.6)'};
  }
`;

const ChordList = memo(({ displayedChord, setDisplayedChord, foundChords }) => {
  return (
    <ListContainer>
      {foundChords.map((chord, i) => {
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
  );
});

const mapStateToProps = ({ chords, drum }) => ({
  displayedChord: drum.displayedChord,
  foundChords: chords.foundChords,
});

export default connect(mapStateToProps, {
  setDisplayedChord,
})(ChordList);
