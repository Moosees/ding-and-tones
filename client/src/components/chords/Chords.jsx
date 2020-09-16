import React from 'react';
import styled from 'styled-components';
import DividerLine from '../shared/dividerLine/DividerLine';
import Filter from './filter/Filter';
import List from './list/List';

const ChordsContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: max-content min-content 2fr;
  height: 100%;
  padding: 3rem;

  ${({ theme }) => theme.mqSmaller`
    padding: 1rem;
  `}
`;

const Chords = () => {
  return (
    <ChordsContainer>
      <Filter />
      <DividerLine vertical />
      <List />
    </ChordsContainer>
  );
};

export default Chords;
