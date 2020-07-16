import React from 'react';
import { connect } from 'react-redux';
import { intervals } from '../../assets/intervals';
import { Interval, IntervalContainer, IntervalList } from './intervals.styles';

const getChordLegend = (intervalList) => {
  return intervalList.map((interval) => (
    <IntervalContainer key={interval}>
      <Interval color={intervals[interval].color} />
      {intervals[interval].name} ({intervals[interval].semitones} semitones)
      <Interval color={intervals[interval].color} />
    </IntervalContainer>
  ));
};

const getScaleLegend = (note, scale) => {
  const currentIntervals = scale[note].intervalMap;

  return currentIntervals.map(({ semitones, compound, note }, i) => {
    const isInverted = semitones < 0;
    const isCompound = semitones < 0 || semitones > 24;
    const isBig = semitones < -12 || semitones > 24;
    const interval = intervals[isCompound ? compound : semitones];
    const color = isInverted ? interval.colorInverted : interval.color;
    const name = isInverted ? interval.inverted : interval.name;
    const modifier = isBig ? (isInverted ? '-' : '+') : '';

    return (
      <IntervalContainer key={i}>
        <Interval color={color} />
        {semitones === 0
          ? 'Current focus - P1'
          : `${note} - ${name}${modifier} (${semitones} steps)`}
        <Interval color={color} />
      </IntervalContainer>
    );
  });
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
  scale: scale.notes.scaleFull,
});

export default connect(mapStateToProps)(Intervals);
