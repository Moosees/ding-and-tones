import React from 'react';
import Chords from '../chords/Chords';
import Intervals from '../controls/intervals/Intervals';
import Drum from '../drum/Drum';
import { MobileContainer, SubContainer } from './mobile.styles';

const Mobile = () => {
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

export default Mobile;
