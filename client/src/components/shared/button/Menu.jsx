import React from 'react';
import useDimensions from '../../../hooks/useDimensions';
import { MenuButton, MenuLabel } from './button.styles';

const BtnMenu = ({
  icon,
  iconAlign,
  iconJustify,
  isActive,
  label,
  onClick,
}) => {
  const { isMobile } = useDimensions();

  return (
    <MenuButton isActive={isActive} onClick={onClick}>
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
