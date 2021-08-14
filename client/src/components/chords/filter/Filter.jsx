import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { helpTopics } from '../../../assets/help';
import {
  setAllChordFiltersTo,
  toggleChordIsSelected,
} from '../../../redux/chords/chords.actions';
import { setDisplayedChord } from '../../../redux/drum/drum.actions';
import Buttons from '../../shared/button/Buttons';
import Help from '../../shared/button/Help';
import BtnPrimary from '../../shared/button/Primary';
import Checkbox from '../../shared/checkbox/Checkbox';
import DividerLine from '../../shared/dividerLine/DividerLine';
import ScrollBox from '../../shared/scrollBox/ScrollBox';
import PrintChordsBtn from '../printChordsBtn/PrintChordsBtn';

const ControlsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const CheckBoxes = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 0.5rem;

  ${({ theme }) => theme.mqW850`
    row-gap: 1px;
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
      label={chord.name}
      checked={chord.isSelected}
      onChange={() => toggleChordIsSelected(chord.id, scale)}
    />
  ));

  return (
    <ControlsContainer>
      <Buttons position="center">
        <PrintChordsBtn />
        <Help topic={helpTopics.CHORDS} />
      </Buttons>
      <DividerLine small />
      <ScrollBox height="75">
        <CheckBoxes>{allChords}</CheckBoxes>
      </ScrollBox>
      <DividerLine small />
      <Buttons position="center">
        <BtnPrimary
          label="All"
          light
          onClick={() => setAllChordFiltersTo(true, scale)}
        />
        <BtnPrimary label="None" light onClick={handleClear} />
      </Buttons>
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
