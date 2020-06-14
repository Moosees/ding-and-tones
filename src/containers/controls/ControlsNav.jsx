import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BtnNav from '../../components/button/Nav';
import { setShowIntervals } from '../../redux/drum/drum.actions';

export const ButtonsContainer = styled.div`
  display: flex;
  margin-left: 5rem;
`;

const ControlsNav = ({ showIntervals, setShowIntervals }) => {
  return (
    <ButtonsContainer>
      <BtnNav
        small
        isActive={!showIntervals}
        label="Controls"
        onClick={() => setShowIntervals(false)}
      />
      <BtnNav
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
