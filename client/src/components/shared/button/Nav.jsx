import React from 'react';
import { NavButton } from './button.styles';

const BtnNav = ({ ariaLabel, disabled, isActive, label, onClick }) => {
  return (
    <NavButton
      aria-label={ariaLabel || label}
      isActive={isActive}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </NavButton>
  );
};

export default BtnNav;
