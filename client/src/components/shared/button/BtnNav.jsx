import React, { forwardRef } from 'react';
import { NavButton } from './button.styles';

const BtnNav = forwardRef(
  ({ ariaLabel, disabled, isActive, label, onClick }, ref) => {
    return (
      <NavButton
        ref={ref}
        aria-label={ariaLabel || label}
        isActive={isActive}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </NavButton>
    );
  }
);

export default BtnNav;
