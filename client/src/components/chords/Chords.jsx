import React from 'react';
import styled from 'styled-components';
import DividerLine from '../shared/dividerLine/DividerLine';
import Filter from './filter/Filter';
import List from './list/List';

const ChordsContainer = styled.div`
  align-content: center;
  display: grid;
  flex-grow: 1;
  grid-template-columns: max-content min-content 1fr;
  grid-template-rows: 95%;
  padding: var(--padding);
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
