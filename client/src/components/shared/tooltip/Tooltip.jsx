import React, { useRef, useState } from 'react';
import { TooltipBtnWrapper, TooltipContainer } from './tooltip.styles';
import TooltipPopup from './TooltipPopup';

const Tooltip = ({ children, parent }) => {
  const Parent = parent;
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
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
