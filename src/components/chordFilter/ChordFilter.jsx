import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  setAllChordFiltersTo,
  toggleChordIsSelected,
} from '../../redux/chords/chords.actions';
import ButtonMain from '../button/ButtonMain';
import Checkbox from '../checkbox/Checkbox';
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

const ChordFilter = ({
  chordList,
  scale,
  setAllChordFiltersTo,
  toggleChordIsSelected,
}) => {
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
        <ButtonMain
          label="Show all"
          light
          onClick={() => setAllChordFiltersTo(true, scale)}
        />
        <ButtonMain
          label="Clear"
          light
          onClick={() => setAllChordFiltersTo(false, scale)}
        />
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
  setAllChordFiltersTo,
  toggleChordIsSelected,
})(ChordFilter);
