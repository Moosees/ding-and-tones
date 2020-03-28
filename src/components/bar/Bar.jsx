import React from 'react';
import { Beats, Beat } from './bar.styles';

const displayBeats = ({ timeSignature, gridValue, pattern }) => {
  if (pattern) {
    // Display the beats in the pattern
    return pattern.map((beat, i) => <Beat key={i}>{beat}</Beat>);
  } else {
    // Create an empty pattern
    const [beats, value] = timeSignature.split('/');
    const totalBeats = beats * (gridValue / value);
    const emptyPattern = [];
    for (let i = 0; i < totalBeats; ++i) {
      emptyPattern.push(<Beat key={i + 1} />);
    }
    return emptyPattern;
  }
};

const Bar = ({ bar }) => {
  return <Beats>{displayBeats(bar)}</Beats>;
};

export default Bar;
