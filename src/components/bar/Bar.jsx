import React from 'react';
import { BarContainer, Beat } from './bar.styles';

const createBar = (timeSignature, gridValue, bar) => {
  const [beats, value] = timeSignature.split('/');
  const totalBeats = beats * (gridValue / value);
  if (bar) {
    return bar.map((beat, i) => <Beat key={i}>{beat}</Beat>);
  } else {
    const bar = [];
    for (let i = 0; i < totalBeats; ++i) {
      bar.push(<Beat key={i + 1} />);
    }
    return bar;
  }
};

const Bar = ({ timeSignature, gridValue, bar }) => {
  return (
    <BarContainer>{createBar(timeSignature, gridValue, bar)}</BarContainer>
  );
};

export default Bar;
