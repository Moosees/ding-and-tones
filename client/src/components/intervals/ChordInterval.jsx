import React from 'react';
import { getNoteLabelFromName, intervals } from '../../assets/intervals';
import {
  IntervalBreakBox,
  IntervalColor,
  IntervalContainer,
  IntervalText,
} from './intervals.styles';

const ChordInterval = ({ interval, note, sharpNotes }) => {
  const { color, name, nameShort, semitones } = intervals[interval];
  const noteLabel = getNoteLabelFromName(`${note}1`, sharpNotes).slice(0, -1);

  return (
    <IntervalContainer key={interval} isChord={true}>
      <IntervalColor color={color} />
      <IntervalBreakBox>
        <IntervalText>
          {noteLabel} - {name}
        </IntervalText>
        <IntervalText>
          ({semitones} steps) - {nameShort}
        </IntervalText>
      </IntervalBreakBox>
    </IntervalContainer>
  );
};

export default ChordInterval;
