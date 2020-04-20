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

const Bar = ({ bar, bars, currentBar, options, isEditing }) => {
  const { barId, arrangementId } = bar;
  const { measure } = bars[barId];

  const beats = displayBeats(arrangementId, barId, measure, options);

  return (
    <div>
      {isEditing && <BarControls bar={bar} />}
      <Beats isPlaying={arrangementId === currentBar}>{beats}</Beats>
    </div>
  );
};

const mapStateToProps = ({ bars, song }) => ({
  bars,
  currentBar: song.currentBar,
  isEditing: song.isEditing,
});

export default connect(mapStateToProps)(Bar);
