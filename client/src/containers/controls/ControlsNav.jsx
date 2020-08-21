import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BtnNavControls from '../../components/button/NavControls';
import { setShowIntervals } from '../../redux/drum/drum.actions';

export const NavButtons = styled.div`
  top: -2.5rem;
  display: flex;
  height: 2.5rem;
  margin-left: 6.5rem;
  position: absolute;
`;

const ControlsNav = ({ showIntervals, setShowIntervals }) => {
  return (
    <NavButtons>
      <BtnNavControls
        isActive={!showIntervals}
        label="User"
        onClick={() => setShowIntervals(false)}
      />
      <BtnNavControls
        isActive={showIntervals}
        label="Intervals"
        onClick={() => setShowIntervals(true)}
      />
    </NavButtons>
  );
};

const mapStateToProps = ({ drum }) => ({
  showIntervals: drum.showIntervals,
});

export default connect(mapStateToProps, { setShowIntervals })(ControlsNav);
