import React from 'react';
import { connect } from 'react-redux';
import { getNoteLabelFromName, intervals } from '../../assets/intervals';
import { setDisplayedNote } from '../../redux/drum/drum.actions';
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

const ScaleInterval = ({
  displayedNote,
  interval,
  number,
  scaleIndex,
  sharpNotes,
  setDisplayedNote,
}) => {
  const { color, modifier, name, nameShort, note, semitones } =
    getIntervalProps(interval);
  const handleIntervalClick = () => {
    setDisplayedNote(scaleIndex);
  };

  return (
    <IntervalContainer onClick={handleIntervalClick}>
      <IntervalColor color={color}>
        <span>{number}</span>
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

const mapStateToProps = ({ drum }) => ({
  displayedNote: drum.displayedNote,
});

export default connect(mapStateToProps, { setDisplayedNote })(ScaleInterval);
