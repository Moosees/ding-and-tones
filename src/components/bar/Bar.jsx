import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import BarControls from '../barControls/BarControls';
import { Beat, Beats } from './bar.styles';

// refactor Beat to own component
const displayBeats = ({ timeSignature, gridValue, pattern }, currentBeat) => {
  if (pattern) {
    // Display the beats in the pattern
    return pattern.map(beat => (
      <Beat key={beat.id} isPlaying={beat.id === currentBeat}>
        {beat.tone}
      </Beat>
    ));
  } else {
    // Create an empty pattern, move to own function
    // fill new bar and beats with IDs
    const [beats, value] = timeSignature.split('/');
    const totalBeats = beats * (gridValue / value);
    const emptyPattern = [];
    for (let i = 0; i < totalBeats; ++i) {
      emptyPattern.push(<Beat key={uuid()} />);
    }
    return emptyPattern;
  }
};

const Bar = ({ bar, currentBar, currentBeat }) => {
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
      <Beats isPlaying={bar.id === currentBar}>
        {displayBeats(bar, currentBeat)}
      </Beats>
    </div>
  );
};

const mapStateToProps = ({ song }) => ({
  currentBar: song.currentBar,
  currentBeat: song.currentBeat
});

export default connect(mapStateToProps)(Bar);
