import React from 'react';
import { ControlsButton, ControlsLabel } from './button.styles';

const BtnControls = ({ icon, iconAlign, label, onClick, reverse }) => {
  return (
    <ControlsButton reverse={reverse} onClick={onClick}>
      <ControlsLabel reverse={reverse}>{label}</ControlsLabel>
      <i style={{ marginTop: `${iconAlign}px` }} className="material-icons">
        {icon}
      </i>
    </ControlsButton>
  );
};

export default BtnControls;
