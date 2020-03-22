import React from 'react';
import { Bar, Beat } from './patternBar.styles';

const createBar = (timeSignature, gridSize) => {
  const [beats, value] = timeSignature.split('/');
  const totalBeats = beats * (gridSize / value);
  const bar = [];
  for (let i = 0; i < totalBeats; ++i) {
    bar.push(<Beat key={i + 1}>{i + 1}</Beat>);
  }
  return bar;
};

const PatternBar = ({ timeSignature, gridSize = 8 }) => {
  return <Bar>{createBar(timeSignature, gridSize)}</Bar>;
};

export default PatternBar;
