import React from 'react';
import { connect } from 'react-redux';
import { intervals } from '../../intervals.data';
import { Interval, IntervalContainer, IntervalList } from './intervals.styles';

const getChordLegend = (intervalList) => {
  return intervalList.map((interval) => (
    <IntervalContainer key={interval}>
      <Interval color={intervals[interval].color} />
      {intervals[interval].name} ({intervals[interval].halfsteps} semitones)
      <Interval color={intervals[interval].color} />
    </IntervalContainer>
  ));
};

const getScaleLegend = (note, scale) => {
  const intervalList = [];
  const currentIntervals = scale[note].intervalList;

  // two octaves
  for (let i = 0; i <= 24; ++i) {
    if (currentIntervals.includes(i))
      intervalList.push(
        <IntervalContainer key={i}>
          <Interval color={intervals[i].color} />
          {intervals[i].name} ({intervals[i].halfsteps} semitones)
          <Interval color={intervals[i].color} />
        </IntervalContainer>
      );
  }

  return intervalList;
};

const Intervals = ({ displayedChord, displayedNote, scale }) => {
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
  scale: scale.scaleFull,
});

export default connect(mapStateToProps)(Intervals);
