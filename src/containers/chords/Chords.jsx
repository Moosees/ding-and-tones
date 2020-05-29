import React from 'react';
import styled from 'styled-components';
import ChordFilter from '../../components/chordFilter/ChordFilter';
import ChordsFound from '../../components/chordsFound/ChordsFound';
import DividerLine from '../../components/dividerLine/DividerLine';

const ChordsContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: max-content min-content 2fr;
  height: 100%;
  padding: 3rem;
`;

const Chords = () => {
  return (
    <ChordsContainer>
      <ChordFilter />
      <DividerLine vertical />
      <ChordsFound />
    </ChordsContainer>
  );
};

export default Chords;
