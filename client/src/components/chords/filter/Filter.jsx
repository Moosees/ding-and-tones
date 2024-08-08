import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { helpTopics } from '../../../assets/help';
import {
  setAllChordFiltersTo,
  toggleChordIsSelected,
} from '../../../redux/chords/chords.slice';
import { setDisplayedChord } from '../../../redux/drum/drum.actions';
import BtnHelp from '../../shared/button/BtnHelp';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Buttons from '../../shared/button/Buttons';
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

const Filter = () => {
  const dispatch = useDispatch();
  const chordList = useSelector(({ chords }) => chords.chordList);
  const scale = useSelector(({ scale }) => scale.parsed.pitched);

  useEffect(() => {
    dispatch(toggleChordIsSelected({ id: null, scale }));
  }, [dispatch, scale]);

  const handleClear = () => {
    dispatch(setAllChordFiltersTo({ value: false, scale }));
    dispatch(setDisplayedChord(null));
  };

  const allChords = chordList.map((chord) => (
    <Checkbox
      key={chord.id}
      label={chord.name}
      checked={chord.isSelected}
      onChange={() => dispatch(toggleChordIsSelected(chord.id, scale))}
    />
  ));

  return (
    <ControlsContainer>
      <Buttons>
        <PrintChordsBtn />
        <BtnHelp topic={helpTopics.CHORDS} />
      </Buttons>
      <DividerLine small />
      <ScrollBox>
        <CheckBoxes>{allChords}</CheckBoxes>
      </ScrollBox>
      <DividerLine small />
      <Buttons>
        <BtnPrimary
          label="All"
          light
          onClick={() => dispatch(setAllChordFiltersTo(true, scale))}
        />
        <BtnPrimary label="None" light onClick={handleClear} />
      </Buttons>
    </ControlsContainer>
  );
};

export default Filter;
