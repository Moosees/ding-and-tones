import React from 'react';
import { Bar, Beat } from './patternBar.styles';

const createBar = (timeSignature, gridValue) => {
  const [beats, value] = timeSignature.split('/');
  const totalBeats = beats * (gridValue / value);
  const bar = [];
  for (let i = 0; i < totalBeats; ++i) {
    bar.push(<Beat key={i + 1}>{i + 1}</Beat>);
  }
  return bar;
};

const PatternBar = ({ timeSignature, gridValue }) => {
  return <Bar>{createBar(timeSignature, gridValue)}</Bar>;
};

export default PatternBar;
