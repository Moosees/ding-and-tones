import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  setAllChordFiltersTo,
  toggleChordIsSelected,
} from '../../redux/chords/chords.actions';
import { setDisplayedChord } from '../../redux/drum/drum.actions';
import BtnPrimary from '../button/Primary';
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
  setDisplayedChord,
  toggleChordIsSelected,
}) => {
  useEffect(() => {
    toggleChordIsSelected(null, scale);
  }, [toggleChordIsSelected, scale]);

  const handleClear = () => {
    setAllChordFiltersTo(false, scale);
    setDisplayedChord(null);
  };

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
        <BtnPrimary
          label="Show all"
          light
          onClick={() => setAllChordFiltersTo(true, scale)}
        />
        <BtnPrimary label="Clear" light onClick={handleClear} />
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
  setDisplayedChord,
  toggleChordIsSelected,
})(ChordFilter);
