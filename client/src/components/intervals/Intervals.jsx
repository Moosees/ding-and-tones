import React from 'react';
import { connect } from 'react-redux';
import { IntervalList } from './intervals.styles';
import { getChordLegend, getScaleLegend } from './intervals.utils';

const Intervals = ({ displayedChord, displayedNote, scale, showIntervals }) => {
  return (
    <IntervalList>
      {scale.length && displayedChord
        ? getChordLegend(displayedChord.intervals)
        : getScaleLegend(displayedNote, scale)}
    </IntervalList>
  );
};

const mapStateToProps = ({ scale, drum }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  scale: scale.notes.scaleFull,
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps)(Intervals);
