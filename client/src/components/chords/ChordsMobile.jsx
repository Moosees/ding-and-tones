import React from 'react';
import Drum from '../drum/Drum';
import Intervals from '../intervals/Intervals';
import { ChordsGrid, GridContainer } from './chordsMobile.styles';
import Filter from './filter/Filter';
import List from './list/List';

const ChordsMobile = () => {
  return (
    <ChordsGrid>
      <Drum style={{ gridArea: 'drum' }} />
      <GridContainer style={{ gridArea: 'intervals' }}>
        <Intervals />
      </GridContainer>
      <GridContainer style={{ gridArea: 'filter' }}>
        <Filter />
      </GridContainer>
      <GridContainer style={{ gridArea: 'chords' }}>
        <List />
      </GridContainer>
    </ChordsGrid>
  );
};

export default ChordsMobile;
