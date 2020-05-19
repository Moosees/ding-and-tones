import React from 'react';
import { connect } from 'react-redux';
import { intervals } from '../../intervals.data';
import { Interval, IntervalContainer, IntervalList } from './intervals.styles';

const getLegend = (note, scale) => {
  const intervalList = [];
  const currentIntervals = scale[note].intervalList;

  // two octaves
  for (let i = 0; i <= 24; ++i) {
    if (currentIntervals.includes(i))
      intervalList.push(
        <IntervalContainer key={i}>
          <Interval color={intervals[i].color} /> - {intervals[i].name} (
          {intervals[i].halfsteps} semitones)
        </IntervalContainer>
      );
  }

  return intervalList;
};

const Intervals = ({ displayedNote, scale }) => {
  return (
    <IntervalList>
      {scale.length && getLegend(displayedNote, scale)}
    </IntervalList>
  );
};

const mapStateToProps = ({ scale, drum }) => ({
  displayedNote: drum.displayedNote,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps)(Intervals);
