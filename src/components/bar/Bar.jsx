import React, { useState } from 'react';
import { connect } from 'react-redux';
import BarControls from '../barControls/BarControls';
import Beat from '../beat/Beat';
import { Beats } from './bar.styles';

const displayBeat = (arrangementId, barId, beat, beatIndex, options) =>
  beat.map((beat, i) => (
    <Beat
      key={beat.beatId}
      arrangementId={arrangementId}
      barId={barId}
      beat={beat}
      options={options}
      isAccented={i === 0}
      beatIndex={beatIndex}
    />
  ));

const displayBeats = (arrangementId, barId, measure, options) => {
  const beats = [];

  measure.forEach((beat, beatIndex) => {
    beats.push(...displayBeat(arrangementId, barId, beat, beatIndex, options));
  });

  return beats;
};

const Bar = ({ bar, bars, currentBar, options }) => {
  const [controlsOpen, setControlsOpen] = useState(false);
  const { barId, arrangementId } = bar;
  const { measure } = bars[barId];

  const beats = displayBeats(arrangementId, barId, measure, options);

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
