import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { NavButton } from './button.styles';

const BtnNavMain = ({ disabled, isActive, label, onClick, to = '/' }) => {
  const history = useHistory();
  const match = useRouteMatch(to);

  return (
    <NavButton
      isActive={onClick ? isActive : match}
      disabled={onClick ? disabled : match}
      onClick={onClick ? onClick : () => history.push(to)}
    >
      {label}
    </NavButton>
  );
};

export default BtnNavMain;
