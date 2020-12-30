import React from 'react';
import { connect } from 'react-redux';
import { changeDrumMode } from '../../redux/drum/drum.actions';
import BtnIcon from '../shared/button/Icon';
import { DrumModeContainer } from './intervals.styles';

const DrumMode = ({ drumMode, changeDrumMode }) => {
  return (
    <DrumModeContainer>
      <BtnIcon
        icon="keyboard_arrow_left"
        onClick={() => changeDrumMode(-1, drumMode)}
      />
      <span onClick={() => changeDrumMode(1, drumMode)}>Show {drumMode}</span>
      <BtnIcon
        icon="keyboard_arrow_right"
        onClick={() => changeDrumMode(1, drumMode)}
      />
    </DrumModeContainer>
  );
};

const mapStateToProps = ({ drum }) => ({
  drumMode: drum.drumMode,
});

export default connect(mapStateToProps, { changeDrumMode })(DrumMode);
