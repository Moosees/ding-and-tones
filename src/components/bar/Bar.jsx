import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import BarControls from '../barControls/BarControls';
import Beat from '../beat/Beat';
import { Beats } from './bar.styles';

// move to parent or somewhere else?
const createNewBar = (timeSignature = '4/4', gridValue = 8) => {
  const [beats, value] = timeSignature.split('/');
  const totalBeats = beats * (gridValue / value);
  const emptyPattern = [];

  for (let i = 0; i < totalBeats; ++i) {
    emptyPattern.push(<Beat key={uuid()} />);
  }

  return emptyPattern;
};

const displayBeats = (barId, updateId, pattern, options) =>
  pattern.map((beat) => (
    <Beat
      key={beat.id}
      barId={barId}
      updateId={updateId}
      beat={beat}
      options={options}
    />
  ));

const Bar = ({ bar, bars, currentBar, options }) => {
  const [controlsOpen, setControlsOpen] = useState(false);

  const toggleControls = () => {
    setControlsOpen(!controlsOpen);
  };

  const { pattern } = bars[bar.bar];

  const beats = bar
    ? displayBeats(bar.id, bar.bar, pattern, options)
    : createNewBar();

  return (
    <div>
      <div>
        <span onClick={toggleControls}>+</span>
        {controlsOpen && <BarControls />}
      </div>
      <Beats isPlaying={bar.id === currentBar}>{beats}</Beats>
    </div>
  );
};

const mapStateToProps = ({ bars, song }) => ({
  bars,
  currentBar: song.currentBar,
});

export default connect(mapStateToProps)(Bar);
