import React from 'react';
import { connect } from 'react-redux';
import DividerLine from '../shared/dividerLine/DividerLine';
import ScaleMode from './DrumMode';
import { IntervalList } from './intervals.styles';
import { getChordLegend, getScaleLegend } from './intervals.utils';

const Intervals = ({ displayedChord, displayedNote, scale, drumMode }) => {
  return (
    <IntervalList>
      <ScaleMode />
      <DividerLine small />
      {scale.length && displayedChord
        ? getChordLegend(displayedChord.intervals)
        : getScaleLegend(displayedNote, scale, drumMode)}
    </IntervalList>
  );
};

const mapStateToProps = ({ scale, drum }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  scale: scale.notes.scaleFull,
  drumMode: drum.drumMode,
});

export default connect(mapStateToProps)(Intervals);
