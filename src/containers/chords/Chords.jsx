import React from 'react';
import styled from 'styled-components';
import ChordControls from '../../components/chordControls/ChordControls';
import ChordList from '../../components/chordList/ChordList';
import DividerLine from '../../components/dividerLine/DividerLine';

const ChordsContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1rem 2fr;
  height: 100%;
  padding: 3rem;
`;

const Chords = () => {
  return (
    <ChordsContainer>
      <ChordControls />
      <DividerLine vertical />
      <ChordList />
    </ChordsContainer>
  );
};

export default Chords;
