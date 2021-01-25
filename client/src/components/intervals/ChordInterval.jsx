import React from 'react';
import { intervals } from '../../assets/intervals';
import useDimensions from '../../hooks/useDimensions';
import {
  IntervalBreakBox,
  IntervalColor,
  IntervalContainer,
  IntervalText,
} from './intervals.styles';

const ChordInterval = ({ interval, note }) => {
  const { color, name, nameShort, semitones } = intervals[interval];
  const { isMobile } = useDimensions();

  return (
    <IntervalContainer key={interval}>
      <IntervalColor color={color} />
      <IntervalBreakBox isMobile={isMobile}>
        <IntervalText>
          {note} - {name}
        </IntervalText>
        <IntervalText>
          ({semitones} steps) - {nameShort}
        </IntervalText>
      </IntervalBreakBox>
      <IntervalColor color={color} />
    </IntervalContainer>
  );
};

export default ChordInterval;
