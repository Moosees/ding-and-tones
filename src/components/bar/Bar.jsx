import React, { useState } from 'react';
import { connect } from 'react-redux';
import BarControls from '../barControls/BarControls';
import Beat from '../beat/Beat';
import { Beats } from './bar.styles';

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

  const { pattern } = bars[bar.bar];

  const beats = displayBeats(bar.id, bar.bar, pattern, options);

  return (
    <div>
      <div>
        <button onClick={() => setControlsOpen(!controlsOpen)}>
          {`${controlsOpen ? 'Hide' : 'Show'} bar controls`}
        </button>
        {controlsOpen && <BarControls barId={bar.bar} />}
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
