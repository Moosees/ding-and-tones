import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setShowIntervals } from '../../redux/drum/drum.actions';
import BtnNavControls from '../button/NavControls';

export const NavButtons = styled.div`
  top: -2.5rem;
  display: flex;
  height: 2.5rem;
  margin-left: 6.5rem;
  position: absolute;
`;

const NavControls = ({ showIntervals, setShowIntervals }) => {
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

export default connect(mapStateToProps, { setShowIntervals })(NavControls);
