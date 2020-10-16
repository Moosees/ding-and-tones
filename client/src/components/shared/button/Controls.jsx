import React from 'react';
import { ControlsButton, ControlsLabel } from './button.styles';

const BtnControls = ({ icon, iconAlign, iconJustify, label, onClick }) => {
  return (
    <ControlsButton onClick={onClick}>
      <i
        style={{ marginTop: `${iconAlign}px`, marginLeft: `${iconJustify}px` }}
        className="material-icons"
      >
        {icon}
      </i>
      <ControlsLabel>{label}</ControlsLabel>
    </ControlsButton>
  );
};

export default BtnControls;
