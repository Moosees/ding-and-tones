import React from 'react';
import styled from 'styled-components';
import ChordControls from '../../components/chordControls/ChordControls';
import ChordList from '../../components/chordList/ChordList';
import DividerLine from '../../components/dividerLine/DividerLine';

const ChordsContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0;
  flex-direction: column;
  height: 100%;
  padding: 3rem;
  overflow: auto;
`;

const Chords = () => {
  return (
    <ChordsContainer>
      <ChordControls />
      <DividerLine />
      <ChordList />
    </ChordsContainer>
  );
};

export default Chords;
