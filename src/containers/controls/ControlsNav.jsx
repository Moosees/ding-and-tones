import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/button/Button';
import { setShowIntervals } from '../../redux/drum/drum.actions';
import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
`;

const ControlsNav = ({ showIntervals, setShowIntervals }) => {
  return (
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
  );
};

const mapStateToProps = ({ drum }) => ({
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps, { setShowIntervals })(ControlsNav);
