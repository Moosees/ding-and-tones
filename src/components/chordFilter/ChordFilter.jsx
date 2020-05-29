import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleChordIsSelected } from '../../redux/chords/chords.actions';
import Checkbox from '../checkbox/Checkbox';
import ButtonMain from '../button/ButtonMain';
import DividerLine from '../dividerLine/DividerLine';

const ControlsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CheckBoxes = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChordFilter = ({ chordList, scale, toggleChordIsSelected }) => {
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

  return (
    <ControlsContainer>
      <div>
        <ButtonMain label="Show all" light />
        <ButtonMain label="Clear" light />
      </div>
      <DividerLine small />
      <CheckBoxes>{allChords}</CheckBoxes>
    </ControlsContainer>
  );
};

const mapStateToProps = ({ chords, scale }) => ({
  chordList: chords.chordList,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps, {
  toggleChordIsSelected,
})(ChordFilter);
