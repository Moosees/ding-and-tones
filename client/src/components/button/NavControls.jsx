import React from 'react';
import { NavButton } from './button.styles';

const BtnNavControls = ({ isActive, label, onClick }) => {
  return (
    <NavButton
      isActive={isActive}
      disabled={isActive}
      controls={true}
      onClick={onClick}
    >
      {label}
    </NavButton>
  );
};

export default BtnNavControls;
