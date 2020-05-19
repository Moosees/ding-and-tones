import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/button/Button';
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
        <Button
          isSmall
          isActive={!showIntervals}
          label="Controls"
          onClick={() => toggleShowIntervals(false)}
        />
        <Button
          isSmall
          isActive={showIntervals}
          label="Intervals"
          onClick={() => toggleShowIntervals(true)}
        />
      </ButtonsContainer>
      <InfoContainer>{showIntervals ? <Intervals /> : <User />}</InfoContainer>
    </ControlsContainer>
  );
};

const mapStateToProps = ({ drum }) => ({
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps, { toggleShowIntervals })(Controls);
