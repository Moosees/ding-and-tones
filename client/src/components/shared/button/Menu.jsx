import React from 'react';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
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
    if (
      e.code === beatOptionToKeyCode['enter'] ||
      e.code === beatOptionToKeyCode['space']
    ) {
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
