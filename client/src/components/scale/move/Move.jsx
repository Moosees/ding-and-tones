import React from 'react';
import { MoveContainer, Note, PositionWrapper } from './move.styles';

const Move = () => {
  return (
    <MoveContainer>
      <PositionWrapper>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </PositionWrapper>
    </MoveContainer>
  );
};

export default Move;
