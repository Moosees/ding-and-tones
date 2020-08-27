import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setShowIntervals } from '../../redux/drum/drum.actions';
import BtnNavSide from '../shared/button/NavSide';

export const NavButtons = styled.div`
  top: -2.5rem;
  display: flex;
  height: 2.5rem;
  margin-left: 6.5rem;
  position: absolute;
`;

const NavSide = ({ showIntervals, setShowIntervals }) => {
  return (
    <NavButtons>
      <BtnNavSide
        isActive={!showIntervals}
        label="User"
        onClick={() => setShowIntervals(false)}
      />
      <BtnNavSide
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

export default connect(mapStateToProps, { setShowIntervals })(NavSide);
