import React from 'react';
import { connect } from 'react-redux';
import { setShowIntervals } from '../../redux/drum/drum.actions';
import Checkbox from '../shared/checkbox/Checkbox';
import DividerLine from '../shared/dividerLine/DividerLine';
import {
  CheckboxContainer,
  IntervalHeader,
  IntervalList,
} from './intervals.styles';
import { getChordLegend, getScaleLegend } from './intervals.utils';

const Intervals = ({
  displayedChord,
  displayedNote,
  scale,
  setShowIntervals,
  showIntervals,
}) => {
  return (
    <IntervalList>
      <IntervalHeader>Select drum mode</IntervalHeader>
      <CheckboxContainer>
        <Checkbox
          name="play"
          onChange={() => setShowIntervals(!showIntervals)}
          label="Click to play"
          checked={!showIntervals}
          style={{ opacity: showIntervals ? '0.5' : '1' }}
        />
        <Checkbox
          name="focus"
          onChange={() => setShowIntervals(!showIntervals)}
          label="Click to focus"
          checked={showIntervals}
          style={{ opacity: showIntervals ? '1' : '0.5' }}
        />
      </CheckboxContainer>
      <DividerLine small />
      <IntervalHeader>Intervals</IntervalHeader>
      {scale.length && displayedChord
        ? getChordLegend(displayedChord.intervals)
        : getScaleLegend(displayedNote, scale, showIntervals)}
    </IntervalList>
  );
};

const mapStateToProps = ({ scale, drum }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  scale: scale.notes.scaleFull,
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps, { setShowIntervals })(Intervals);
