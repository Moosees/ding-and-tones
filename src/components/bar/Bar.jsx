import React from 'react';
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

const Bar = ({ bar, bars, currentBar, options, isEditingSong }) => {
  const { barId, arrangementId } = bar;
  const { measure } = bars[barId];

  const beats = displayBeats(arrangementId, barId, measure, options);

  return (
    <div>
      {isEditingSong && <BarControls bar={bar} />}
      <Beats isPlaying={arrangementId === currentBar}>{beats}</Beats>
    </div>
  );
};

const mapStateToProps = ({ bars, ui }) => ({
  bars,
  currentBar: ui.currentBar,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps)(Bar);
