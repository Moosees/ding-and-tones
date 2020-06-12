import React from 'react';
import { connect } from 'react-redux';
import NavButton from '../../components/button/NavButton';
import { setShowIntervals } from '../../redux/drum/drum.actions';
import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  margin-left: 5rem;
`;

const ControlsNav = ({ showIntervals, setShowIntervals }) => {
  return (
    <ButtonsContainer>
      <NavButton
        small
        isActive={!showIntervals}
        label="Controls"
        onClick={() => setShowIntervals(false)}
      />
      <NavButton
        small
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
