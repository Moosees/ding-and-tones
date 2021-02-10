import React from 'react';
import Chords from '../chords/Chords';
import Drum from '../drum/Drum';
import Intervals from '../intervals/Intervals';
import {
  ChordsContainer,
  IntervalsContainer,
  MobileContainer,
} from './mobileDrum.styles';

const MobileDrum = () => {
  return (
    <MobileContainer>
      <Drum style={{ gridArea: 'drum' }} />
      <IntervalsContainer style={{ gridArea: 'intervals' }}>
        <Intervals />
      </IntervalsContainer>
      <ChordsContainer style={{ gridArea: 'chords' }}>
        <Chords />
      </ChordsContainer>
    </MobileContainer>
  );
};

export default MobileDrum;
