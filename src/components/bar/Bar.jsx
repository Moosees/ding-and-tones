import React from 'react';
import { connect } from 'react-redux';
import BarControls from '../barControls/BarControls';
import { BarContainer, Beats } from './bar.styles';
import { checkMeasureVsMetre, displayBeats } from './bar.utils';
import { useEffect } from 'react';

const Bar = ({ barId, bars, beats, currentBar, isEditingSong }) => {
  const { measure, subdivision, metre } = bars[barId];

  useEffect(() => {
    checkMeasureVsMetre(barId, measure, beats, subdivision, metre);
  }, [barId, measure, beats, subdivision, metre]);

  const filteredBeats = displayBeats(measure, beats, subdivision);

  return (
    <BarContainer>
      {isEditingSong && <BarControls barId={barId} />}
      {filteredBeats && (
        <Beats isPlaying={barId === currentBar}>{filteredBeats}</Beats>
      )}
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
