import React from 'react';
import { IconButton } from './button.styles';

const BtnIcon = ({ disabled, label, icon, onClick }) => {
  return (
    <IconButton aria-label={label} disabled={disabled} onClick={onClick}>
      <i className="material-icons">{icon}</i>
    </IconButton>
  );
};

export default BtnIcon;
