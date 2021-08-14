import React from 'react';
import Filter from '../chords/filter/Filter';
import List from '../chords/list/List';
import Drum from '../drum/Drum';
import Intervals from '../intervals/Intervals';
import {
  GridContainer,
  MobileContainer
} from './mobileDrum.styles';

const MobileDrum = () => {
  return (
    <MobileContainer>
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
    </MobileContainer>
  );
};

export default MobileDrum;
