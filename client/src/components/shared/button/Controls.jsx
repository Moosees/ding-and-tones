import React from 'react';
import { ControlsButton, ControlsLabel } from './button.styles';

const BtnControls = ({ icon, iconAlign, label, onClick }) => {
  return (
    <ControlsButton onClick={onClick}>
      <i style={{ marginTop: `${iconAlign}px` }} className="material-icons">
        {icon}
      </i>
      <ControlsLabel>{label}</ControlsLabel>
    </ControlsButton>
  );
};

export default BtnControls;
