import React from 'react';
import { MiniExtraContainer } from './tonefield.styles';

const MiniExtra = ({ extra, showNote }) => {
  return (
    <MiniExtraContainer showNote={showNote} position={extra.pos}>
      {extra.note}
    </MiniExtraContainer>
  );
};

export default MiniExtra;
