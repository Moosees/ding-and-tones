import React, { useRef, useState } from 'react';
import { TooltipAnchor } from './tooltip.styles';
import TooltipPopup from './TooltipPopup';

const Tooltip = ({ children, parent }) => {
  const Parent = parent;
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <TooltipAnchor
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        ref={anchorRef}
      >
        <Parent />
      </TooltipAnchor>
      {isOpen && (
        <TooltipPopup anchorRef={anchorRef} isOpenCb={setIsOpen}>
          {children}
        </TooltipPopup>
      )}
    </>
  );
};

export default Tooltip;
