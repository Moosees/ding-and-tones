import React from 'react';
import { MiniExtraContainer } from './tonefield.styles';

const MiniExtra = ({ extra, showNote }) => {
  return (
    <MiniExtraContainer position={extra.pos}>
      {showNote ? extra.note : ''}
    </MiniExtraContainer>
  );
};

export default MiniExtra;
