import React from 'react';
import { connect } from 'react-redux';
import BarControls from '../barControls/BarControls';
import BarMetre from '../barMetre/BarMetre';
import Beat from '../beat/Beat';
import { BarContainer, Beats } from './bar.styles';

const displayBeats = (barId, subdivision, measure) => {
  const beats = [];

  measure.forEach((beat) => {
    if (beat.value <= subdivision)
      beats.push(
        <Beat
          key={beat.beatId}
          barId={barId}
          beat={beat}
          isAccented={beat.value === 4}
        />
      );
  });

  return beats;
};

const Bar = ({ bar, measure, currentBar, isEditingSong, subdivision }) => {
  const beats = displayBeats(bar, subdivision, measure);

  return (
    <BarContainer>
      {isEditingSong && <BarControls bar={bar} />}
      <Beats isPlaying={bar === currentBar}>{beats}</Beats>
      {isEditingSong && <BarMetre bar={bar} />}
    </BarContainer>
  );
};

const mapStateToProps = ({ ui }) => ({
  currentBar: ui.currentBar,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps)(Bar);
