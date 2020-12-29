import React from 'react';
import { connect } from 'react-redux';
import { drumModes } from '../../assets/intervals';
import { setDrumMode } from '../../redux/drum/drum.actions';
import Checkbox from '../shared/checkbox/Checkbox';
import { CheckboxContainer, IntervalHeader } from './intervals.styles';

const DrumMode = ({ drumMode, setDrumMode }) => {
  return (
    <>
      <IntervalHeader>Drum Mode</IntervalHeader>
      <CheckboxContainer>
        <Checkbox
          name="notes"
          onChange={() => setDrumMode(drumModes.NOTES)}
          label="Notes"
          checked={drumMode === drumModes.NOTES}
        />
        <Checkbox
          name="numbers"
          onChange={() => setDrumMode(drumModes.NUMBERS)}
          label="Numbers"
          checked={drumMode === drumModes.NUMBERS}
        />
        <Checkbox
          name="intervals"
          onChange={() => setDrumMode(drumModes.INTERVALS)}
          label="Intervals"
          checked={drumMode === drumModes.INTERVALS}
        />
      </CheckboxContainer>
    </>
  );
};

const mapStateToProps = ({ drum }) => ({
  drumMode: drum.drumMode,
});

export default connect(mapStateToProps, { setDrumMode })(DrumMode);
