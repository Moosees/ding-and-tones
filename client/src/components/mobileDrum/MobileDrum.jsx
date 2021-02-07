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
      <div style={{ gridArea: 'chords' }}>
        <Chords />
      </div>
    </MobileContainer>
  );
};

export default MobileDrum;
