import React from 'react';
import useDimensions from '../../../hooks/useDimensions';
import { MenuButton, MenuLabel } from './button.styles';

const BtnMenu = ({ icon, iconAlign, iconJustify, label, onClick }) => {
  const { isMobile } = useDimensions();

  return (
    <MenuButton onClick={onClick}>
      <i
        style={
          isMobile
            ? {}
            : { marginTop: `${iconAlign}px`, marginLeft: `${iconJustify}px` }
        }
        className="material-icons"
      >
        {!isMobile && icon}
      </i>
      <MenuLabel>{label}</MenuLabel>
    </MenuButton>
  );
};

export default BtnMenu;
