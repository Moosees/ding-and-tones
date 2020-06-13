import React from 'react';
import { connect } from 'react-redux';
import BarControls from '../barControls/BarControls';
import BarMetre from '../barMetre/BarMetre';
import Beat from '../beat/Beat';
import { BarContainer, Beats } from './bar.styles';

const displayBeats = (measure, beats, barSubdivision) => {
  const filteredBeats = [];

  measure.forEach((beat) => {
    const { value } = beats[beat];

    if (value <= barSubdivision)
      filteredBeats.push(<Beat key={beat} beatId={beat} />);
  });

  return filteredBeats;
};

const Bar = ({ barId, bars, beats, currentBar, isEditingSong }) => {
  const { measure, subdivision } = bars[barId];
  const filteredBeats = displayBeats(measure, beats, subdivision);

  return (
    <BarContainer>
      {isEditingSong && <BarControls barId={barId} />}
      <Beats isPlaying={barId === currentBar}>{filteredBeats}</Beats>
      {isEditingSong && <BarMetre barId={barId} />}
    </BarContainer>
  );
};

const mapStateToProps = ({ bars, ui }) => ({
  bars: bars.bars,
  beats: bars.beats,
  currentBar: ui.currentBar,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps)(Bar);
