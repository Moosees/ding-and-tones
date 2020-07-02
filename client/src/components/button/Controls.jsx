import React from 'react';
import { ControlsButton, ControlsLabel } from './button.styles';

const BtnControls = ({ label, icon, reverse, onClick }) => {
  return (
    <ControlsButton reverse={reverse} onClick={onClick}>
      <ControlsLabel reverse={reverse}>{label}</ControlsLabel>
      <i className="material-icons">{icon}</i>
    </ControlsButton>
  );
};

export default BtnControls;
