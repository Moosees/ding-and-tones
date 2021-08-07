import React from 'react';
import { TRANSLATE_BASE } from '../../../assets/constants';

const Tak = ({ hand }) => {
  const isPlaying = true;
  const isSoftTak = true;
  const offset = TRANSLATE_BASE / 2 + 0.5;

  return (
    <circle
      r={isSoftTak ? '0.9' : '1.1'}
      cx="0"
      cy="0"
      transform={`translate(${hand === 'L' ? offset : offset * -1})`}
      fill={isPlaying ? '#ccc' : 'transparent'}
    />
  );
};

export default Tak;
