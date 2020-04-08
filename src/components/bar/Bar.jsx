import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import BarControls from '../barControls/BarControls';
import Beat from '../beat/Beat';
import { Beats } from './bar.styles';

const createNewBar = (timeSignature = '4/4', gridValue = 8) => {
  const [beats, value] = timeSignature.split('/');
  const totalBeats = beats * (gridValue / value);
  const emptyPattern = [];

  for (let i = 0; i < totalBeats; ++i) {
    emptyPattern.push(<Beat key={uuid()} />);
  }
  
  return emptyPattern;
};

const displayBeats = (pattern) =>
  pattern.map((beat) => <Beat key={beat.id} beat={beat} />);

const Bar = ({ bar, currentBar }) => {
  const [controlsOpen, setControlsOpen] = useState(false);

  const toggleControls = () => {
    setControlsOpen(!controlsOpen);
  };

  const id = bar ? bar.id : uuid();
  const beats = bar ? displayBeats(bar.pattern) : createNewBar();

  // create a bar in state from id and empty bar

  return (
    <div>
      <div>
        <span onClick={toggleControls}>+</span>
        {controlsOpen && <BarControls />}
      </div>
      <Beats isPlaying={id === currentBar}>{beats}</Beats>
    </div>
  );
};

const mapStateToProps = ({ song }) => ({
  currentBar: song.currentBar,
});

export default connect(mapStateToProps)(Bar);
