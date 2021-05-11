import React from 'react';
import { MiniExtraContainer } from './tonefield.styles';

const MiniExtra = ({ note, showNote }) => {
  return (
    <MiniExtraContainer showNote={showNote} position={note.pos}>
      {note.note}
    </MiniExtraContainer>
  );
};

export default MiniExtra;
