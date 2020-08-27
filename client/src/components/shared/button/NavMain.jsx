import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { NavButton } from './button.styles';

const BtnNavMain = ({ label, to }) => {
  const history = useHistory();
  const match = useRouteMatch(to);

  return (
    <NavButton
      isActive={match}
      disabled={match}
      onClick={() => history.push(to)}
    >
      {label}
    </NavButton>
  );
};

export default BtnNavMain;
