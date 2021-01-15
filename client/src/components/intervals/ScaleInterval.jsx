import React from 'react';
import { connect } from 'react-redux';
import { drumModes, intervals } from '../../assets/intervals';
import { setDisplayedNote } from '../../redux/drum/drum.actions';
import {
  IntervalBreakBox,
  IntervalColor,
  IntervalContainer,
  IntervalText,
} from './intervals.styles';

const getIntervalProps = (interval) => {
  const { semitones, compound, note } = interval;

  const isInverted = semitones < 0;
  const isCompound = semitones < 0 || semitones > 24;
  const isBig = semitones < -12 || semitones > 24;

  const {
    color,
    colorInverted,
    inverted,
    invertedShort,
    name,
    nameShort,
  } = intervals[isCompound ? compound : semitones];

  return {
    color: isInverted ? colorInverted : color,
    modifier: isBig ? (isInverted ? '-' : '+') : '',
    name: isInverted ? inverted : name,
    nameShort: isInverted ? invertedShort : nameShort,
    note,
    semitones,
  };
};

const ScaleInterval = ({
  displayedNote,
  drumMode,
  scaleIndex,
  interval,
  setDisplayedNote,
}) => {
  const {
    color,
    modifier,
    name,
    nameShort,
    note,
    semitones,
  } = getIntervalProps(interval);

  const handleIntervalClick = () => {
    setDisplayedNote(displayedNote === scaleIndex ? 0 : scaleIndex);
  };

  return (
    <IntervalContainer
      intervals={drumMode === drumModes.INTERVALS}
      onClick={handleIntervalClick}
    >
      <IntervalColor color={color}>
        <span>{scaleIndex}</span>
      </IntervalColor>
      <IntervalBreakBox>
        {drumMode === drumModes.INTERVALS && semitones === 0 ? (
          <>
            <IntervalText>{note} - Root</IntervalText>
            <IntervalText>(click intervals</IntervalText>
            <IntervalText>to change)</IntervalText>
          </>
        ) : (
          <>
            <IntervalText>
              {note} - {name}
              {modifier}
            </IntervalText>
            <IntervalText>
              ({semitones} steps) - {nameShort}
            </IntervalText>
          </>
        )}
      </IntervalBreakBox>
      <IntervalColor color={color}>
        <span>{scaleIndex}</span>
      </IntervalColor>
    </IntervalContainer>
  );
};

const mapStateToProps = ({ drum }) => ({
  displayedNote: drum.displayedNote,
  drumMode: drum.drumMode,
});

export default connect(mapStateToProps, { setDisplayedNote })(ScaleInterval);
