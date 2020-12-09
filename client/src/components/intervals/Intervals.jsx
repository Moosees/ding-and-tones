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
      <IntervalHeader>
        {displayedChord ? 'Select chord mode' : 'Select scale mode'}
      </IntervalHeader>
      <CheckboxContainer>
        <Checkbox
          name="play"
          onChange={() => setShowIntervals(!showIntervals)}
          label={displayedChord ? 'Show notes' : 'Click to play'}
          checked={!showIntervals}
        />
        <Checkbox
          name="focus"
          onChange={() => setShowIntervals(!showIntervals)}
          label={displayedChord ? 'Show intervals' : 'Click to focus'}
          checked={showIntervals}
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
