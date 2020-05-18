import React from 'react';
import { connect } from 'react-redux';
import { toggleShowIntervals } from '../../redux/drum/drum.actions';
import Intervals from '../intervals/Intervals';
import User from '../user/User';
import {
  ButtonsContainer,
  ControlsContainer,
  InfoContainer,
} from './controls.styles';

const Controls = ({ showIntervals, toggleShowIntervals }) => {
  return (
    <ControlsContainer>
      <ButtonsContainer>
        <button onClick={() => toggleShowIntervals(false)}>
          Controls/Play
        </button>
        <button onClick={() => toggleShowIntervals(true)}>Intervals</button>
      </ButtonsContainer>
      <InfoContainer>{showIntervals ? <Intervals /> : <User />}</InfoContainer>
    </ControlsContainer>
  );
};

const mapStateToProps = ({ drum }) => ({
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps, { toggleShowIntervals })(Controls);
