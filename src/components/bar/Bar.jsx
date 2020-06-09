import React from 'react';
import { connect } from 'react-redux';
import BarControls from '../barControls/BarControls';
import BarMetre from '../barMetre/BarMetre';
import Beat from '../beat/Beat';
import { BarContainer, Beats } from './bar.styles';

const displayBeat = (barId, beat, beatIndex) =>
  beat.map((beat, i) => (
    <Beat
      key={beat.beatId}
      barId={barId}
      beat={beat}
      isAccented={i === 0}
      beatIndex={beatIndex}
    />
  ));

const displayBeats = (barId, measure) => {
  const beats = [];

  measure.forEach((beat, beatIndex) => {
    beats.push(...displayBeat(barId, beat, beatIndex));
  });

  return beats;
};

const Bar = ({ bar, currentBar, options, isEditingSong }) => {
  const { barId, measure } = bar;

  const beats = displayBeats(barId, measure, options);

  return (
    <BarContainer>
      {isEditingSong && <BarControls bar={bar} />}
      <Beats isPlaying={barId === currentBar}>{beats}</Beats>
      {isEditingSong && <BarMetre bar={bar} />}
    </BarContainer>
  );
};

const mapStateToProps = ({ ui }) => ({
  currentBar: ui.currentBar,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps)(Bar);
