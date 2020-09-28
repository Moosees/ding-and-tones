import React from 'react';
import Chords from '../chords/Chords';
import Drum from '../drum/Drum';
import Intervals from '../intervals/Intervals';
import { MobileContainer, SubContainer } from './mobileDrum.styles';

const MobileDrum = () => {
  return (
    <MobileContainer>
      <Drum style={{ gridArea: 'drum' }} />
      <SubContainer style={{ gridArea: 'intervals' }}>
        <Intervals />
      </SubContainer>
      <SubContainer style={{ gridArea: 'chords' }}>
        <Chords />
      </SubContainer>
    </MobileContainer>
  );
};

export default MobileDrum;
