import React from 'react';
import { NavButton } from './button.styles';

const BtnNav = ({ disabled, isActive, label, onClick }) => {
  return (
    <NavButton isActive={isActive} disabled={disabled} onClick={onClick}>
      {label}
    </NavButton>
  );
};

export default BtnNav;
