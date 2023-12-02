import React from 'react';
import { getNoteLabelFromName } from '../../../assets/intervals';
import { MiniExtraContainer } from './tonefield.styles';

const MiniExtra = ({ extra, sharpNotes, showNote }) => {
  return (
    <MiniExtraContainer $position={extra.pos}>
      {showNote ? getNoteLabelFromName(extra.note, sharpNotes) : ''}
    </MiniExtraContainer>
  );
};

export default MiniExtra;
