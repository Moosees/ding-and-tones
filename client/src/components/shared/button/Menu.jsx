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

  const handleKeyDown = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <MenuButton
      tabIndex={0}
      isActive={isActive}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
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
