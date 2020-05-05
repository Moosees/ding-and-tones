import React from 'react';
import { connect } from 'react-redux';
import { intervals } from '../../intervals.data';
import { Interval, IntervalContainer } from './legend.styles';

const getLegend = (note, scale) => {
  const intervalList = [];
  const currentIntervals = scale[note].intervalList;

  // two octaves
  for (let i = 0; i <= 24; ++i) {
    if (currentIntervals.includes(i))
      intervalList.push(
        <Interval key={i} color={intervals[i].color}>
          {intervals[i].name}
        </Interval>
      );
  }

  return intervalList;
};

const Legend = ({ displayedNote, scale }) => {
  return (
    <IntervalContainer>
      {scale.length && getLegend(displayedNote, scale)}
    </IntervalContainer>
  );
};

const mapStateToProps = ({ scale, drum }) => ({
  displayedNote: drum.displayedNote,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps)(Legend);
