import React from 'react';
import { MenuButton, MenuLabel } from './button.styles';

const BtnMenu = ({ icon, iconAlign, iconJustify, label, onClick }) => {
  return (
    <MenuButton onClick={onClick}>
      <i
        style={{ marginTop: `${iconAlign}px`, marginLeft: `${iconJustify}px` }}
        className="material-icons"
      >
        {icon}
      </i>
      <MenuLabel>{label}</MenuLabel>
    </MenuButton>
  );
};

export default BtnMenu;
