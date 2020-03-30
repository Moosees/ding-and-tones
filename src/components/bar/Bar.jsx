import React, { useState } from 'react';
import BarControls from '../barControls/BarControls';
import { Beat, Beats } from './bar.styles';

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
  const [controlsOpen, setControlsOpen] = useState(false);

  const toggleControls = () => {
    setControlsOpen(!controlsOpen);
  };

  return (
    <div>
      <div>
        <span onClick={toggleControls}>+</span>
        {controlsOpen && <BarControls />}
      </div>
      <Beats>{displayBeats(bar)}</Beats>
    </div>
  );
};

export default Bar;
