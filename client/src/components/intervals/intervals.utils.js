import React from 'react';
import { drumModes, intervals } from '../../assets/intervals';
import {
  IntervalBreakBox,
  IntervalColor,
  IntervalContainer,
  IntervalText,
} from './intervals.styles';

export const getChordLegend = (intervalList) => {
  return intervalList.map((interval) => (
    <IntervalContainer key={interval}>
      <IntervalColor color={intervals[interval].color} />
      <IntervalBreakBox>
        <IntervalText>{intervals[interval].name}</IntervalText>
        <IntervalText>({intervals[interval].semitones} semitones)</IntervalText>
      </IntervalBreakBox>
      <IntervalColor color={intervals[interval].color} />
    </IntervalContainer>
  ));
};

export const getScaleLegend = (note, scale, drumMode) => {
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
        <IntervalColor color={color}>
          <span>{i}</span>
        </IntervalColor>
        <IntervalBreakBox>
          {false && drumMode === drumModes.INTERVALS && semitones === 0 ? (
            <IntervalText>{note} - Current Focus</IntervalText>
          ) : (
            <>
              <IntervalText>
                {note} - {name}
                {modifier}
              </IntervalText>
              <IntervalText>({semitones} steps)</IntervalText>
            </>
          )}
        </IntervalBreakBox>
        <IntervalColor color={color}>
          <span>{i}</span>
        </IntervalColor>
      </IntervalContainer>
    );
  });
};
