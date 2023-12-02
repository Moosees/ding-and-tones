import React, { forwardRef } from 'react';
import { NavButton } from './button.styles';

const BtnNav = forwardRef(
  ({ ariaLabel, disabled, isActive, label, onClick }, ref) => {
    return (
      <NavButton
        ref={ref}
        aria-label={ariaLabel || label}
        disabled={disabled}
        onClick={onClick}
        $isActive={isActive}
      >
        {label}
      </NavButton>
    );
  }
);

export default BtnNav;
