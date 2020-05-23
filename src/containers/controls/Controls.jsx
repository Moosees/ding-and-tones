import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/button/Button';
import { setShowIntervals } from '../../redux/drum/drum.actions';
import Intervals from '../intervals/Intervals';
import User from '../user/User';
import {
  ButtonsContainer,
  ControlsContainer,
  InfoContainer,
} from './controls.styles';

const Controls = ({ showIntervals, setShowIntervals }) => {
  return (
    <ControlsContainer>
      <ButtonsContainer>
        <Button
          isSmall
          isActive={!showIntervals}
          label="Controls"
          onClick={() => setShowIntervals(false)}
        />
        <Button
          isSmall
          isActive={showIntervals}
          label="Intervals"
          onClick={() => setShowIntervals(true)}
        />
      </ButtonsContainer>
      <InfoContainer>{showIntervals ? <Intervals /> : <User />}</InfoContainer>
    </ControlsContainer>
  );
};

const mapStateToProps = ({ drum }) => ({
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps, { setShowIntervals })(Controls);
