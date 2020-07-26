import React from 'react';
import { IconButton } from './button.styles';

const BtnIcon = ({ color, disabled, editOnly, label, icon, onClick }) => {
  return (
    <IconButton
      aria-label={label}
      color={`color${color}`}
      disabled={disabled}
      editOnly={editOnly}
      onClick={onClick}
    >
      <i className="material-icons">{icon}</i>
    </IconButton>
  );
};

export default BtnIcon;
