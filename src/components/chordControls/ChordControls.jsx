import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleChordIsSelected } from '../../redux/chords/chords.actions';
import Checkbox from '../checkbox/Checkbox';

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChordControls = ({ chordList, scale, toggleChordIsSelected }) => {
  useEffect(() => {
    toggleChordIsSelected(null, scale);
  }, [toggleChordIsSelected, scale]);

  const allChords = chordList.map((chord) => (
    <Checkbox
      key={chord.id}
      id={chord.id}
      label={chord.name}
      isSelected={chord.isSelected}
      handleChange={(e) => toggleChordIsSelected(e.target.name, scale)}
    />
  ));

  return <ControlsContainer>{allChords}</ControlsContainer>;
};

const mapStateToProps = ({ chords, scale }) => ({
  chordList: chords.chordList,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps, {
  toggleChordIsSelected,
})(ChordControls);
