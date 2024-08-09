import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNoteLabelFromName, intervals } from '../../assets/intervals';
import { setDisplayedNote } from '../../redux/drum/drum.slice';
import {
  IntervalBreakBox,
  IntervalColor,
  IntervalContainer,
  IntervalText,
} from './intervals.styles';

const getIntervalProps = (interval) => {
  const { compound, note, octaves, semitones } = interval;

  const isOctave = semitones % 12 === 0 && semitones !== 0;

  const { color, name, nameShort } = intervals[isOctave ? 12 : compound];
  const modifierBase = octaves === 0 ? '' : octaves > 0 ? '+' : '-';

  return {
    color: color,
    modifier: modifierBase.repeat(Math.abs(octaves)),
    name: name,
    nameShort: nameShort,
    note,
    semitones,
  };
};

const ScaleInterval = ({ interval, option, scaleIndex, sharpNotes }) => {
  const dispatch = useDispatch();
  const rootIndex = useSelector(({ scale }) => scale.info.rootIndex);

  const { color, modifier, name, nameShort, note, semitones } =
    getIntervalProps(interval);

  const handleIntervalClick = () => {
    dispatch(setDisplayedNote({ note: scaleIndex, rootIndex }));
  };

  return (
    <IntervalContainer onClick={handleIntervalClick}>
      <IntervalColor $color={color}>
        <span>{option}</span>
      </IntervalColor>
      <IntervalBreakBox>
        <IntervalText>
          {getNoteLabelFromName(note, sharpNotes)} - {name}
          {modifier}
        </IntervalText>
        <IntervalText>
          ({semitones} steps) - {nameShort}
        </IntervalText>
      </IntervalBreakBox>
    </IntervalContainer>
  );
};

export default ScaleInterval;
