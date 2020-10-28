import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  setAllChordFiltersTo,
  toggleChordIsSelected,
} from '../../../redux/chords/chords.actions';
import { setDisplayedChord } from '../../../redux/drum/drum.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import Checkbox from '../../shared/checkbox/Checkbox';
import DividerLine from '../../shared/dividerLine/DividerLine';

const ControlsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  overflow: auto;
`;

const CheckBoxes = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 0.5rem;

  ${({ theme }) => theme.mqSmaller`
    font-size: ${theme.fzSmall};
  `}
`;

const Filter = ({
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
      name={chord.id}
      label={chord.name}
      checked={chord.isSelected}
      onChange={(e) => toggleChordIsSelected(e.target.name, scale)}
    />
  ));

  return (
    <ControlsContainer>
      <Buttons>
        <BtnPrimary
          label="Show all"
          light
          onClick={() => setAllChordFiltersTo(true, scale)}
        />
        <BtnPrimary label="Clear" light onClick={handleClear} />
      </Buttons>
      <DividerLine small />
      <CheckBoxes>{allChords}</CheckBoxes>
    </ControlsContainer>
  );
};

const mapStateToProps = ({ chords, scale }) => ({
  chordList: chords.chordList,
  scale: scale.notes.scaleFull,
});

export default connect(mapStateToProps, {
  setAllChordFiltersTo,
  setDisplayedChord,
  toggleChordIsSelected,
})(Filter);
