import React from 'react';
import { forwardRef } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { NavButton } from './button.styles';

const BtnNavMain = forwardRef(
  ({ disabled, isActive, label, onClick, to = '/' }, ref) => {
    const history = useHistory();
    const match = useRouteMatch(to);

    return (
      <NavButton
        isActive={onClick ? isActive : match}
        disabled={onClick ? disabled : match}
        onClick={onClick ? onClick : () => history.push(to)}
        ref={ref}
      >
        {label}
      </NavButton>
    );
  }
);

export default BtnNavMain;
