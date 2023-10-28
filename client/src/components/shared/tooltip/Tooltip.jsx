import React, { useRef, useState } from 'react';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import TooltipPopup from './TooltipPopup';
import { TooltipBtnWrapper, TooltipContainer } from './tooltip.styles';

const Tooltip = ({ children, parent }) => {
  const Parent = parent;
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.code === beatOptionToKeyCode['enter'] || e.code === beatOptionToKeyCode['space']) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <TooltipContainer ref={anchorRef}>
      <TooltipBtnWrapper
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <Parent />
      </TooltipBtnWrapper>
      {isOpen && (
        <TooltipPopup anchorRef={anchorRef} isOpenCb={setIsOpen}>
          {children}
        </TooltipPopup>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
