import React, { useRef, useState } from 'react';
import useDimensions from '../../../hooks/useDimensions';
import { TooltipAnchor } from './tooltip.styles';
import TooltipPopup from './TooltipPopup';

const Tooltip = ({ children, parent }) => {
  const Parent = parent;
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const dropdownPosRef = useRef(null);
  const { height, width } = useDimensions();

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    const rect = btnRef.current.getBoundingClientRect();
    console.log(rect);
    console.log({ height, width });
    const left = rect.left + rect.width / 2 < width / 2;
    const top = rect.top + rect.height / 2 < height / 2;
    console.log({ left, top });
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
        ref={btnRef}
      >
        <Parent />
      </TooltipAnchor>
      {isOpen && (
        <TooltipPopup
          dropdownPosRef={dropdownPosRef}
          btnRef={btnRef}
          isOpenCb={setIsOpen}
        >
          {children}
        </TooltipPopup>
      )}
    </>
  );
};

export default Tooltip;
