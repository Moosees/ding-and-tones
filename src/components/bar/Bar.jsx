import React, { useState } from 'react';
import { connect } from 'react-redux';
import BarControls from '../barControls/BarControls';
import Beat from '../beat/Beat';
import { Beats } from './bar.styles';

const displayBeats = (arrangementId, barId, pattern, options) =>
  pattern.map((beat) => (
    <Beat
      key={beat.beatId}
      arrangementId={arrangementId}
      barId={barId}
      beat={beat}
      options={options}
    />
  ));

const Bar = ({ bar, bars, currentBar, options }) => {
  const [controlsOpen, setControlsOpen] = useState(false);
  const { barId, arrangementId } = bar;
  const { pattern } = bars[barId];

  const beats = displayBeats(arrangementId, barId, pattern, options);

  return (
    <div>
      <div>
        <button onClick={() => setControlsOpen(!controlsOpen)}>
          {`${controlsOpen ? 'Hide' : 'Show'} bar controls`}
        </button>
        {controlsOpen && <BarControls bar={bar} />}
      </div>
      <Beats isPlaying={arrangementId === currentBar}>{beats}</Beats>
    </div>
  );
};

const mapStateToProps = ({ bars, song }) => ({
  bars,
  currentBar: song.currentBar,
});

export default connect(mapStateToProps)(Bar);
