import React from 'react';
import { createPortal } from 'react-dom';
import useCloseOutside from '../../../hooks/useCloseOutside';
import useDimensions from '../../../hooks/useDimensions';
import BtnIcon from '../button/Icon';
import { Arrow, PopupContainer } from './tooltip.styles';

const TooltipPopup = ({ anchorRef, children, dropdownPosRef, isOpenCb }) => {
  const { insideRef } = useCloseOutside(isOpenCb, anchorRef);
  const { width } = useDimensions();
  const rect = anchorRef.current.getBoundingClientRect();
  const openRight = rect.left + rect.width / 2 < width / 2;
  const vertPos = openRight ? rect.right + 20 : rect.left + 20;
  // const top = rect.top + rect.height / 2 < height / 2;

  const handleClick = (e) => {
    isOpenCb(false);
  };

  return createPortal(
    <PopupContainer
      openRight={openRight}
      vertPos={vertPos}
      top={rect.top}
      ref={insideRef}
    >
      <Arrow openRight={openRight} />
      {children}
      <BtnIcon icon="close" onClick={handleClick} />
    </PopupContainer>,
    document.getElementById('overlay')
  );
};

export default TooltipPopup;
