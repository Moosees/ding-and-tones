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
  const arrowLeft = rect.left + rect.width / 2 < width / 2;
  // const top = rect.top + rect.height / 2 < height / 2;

  const handleClick = (e) => {
    isOpenCb(false);
  };

  return createPortal(
    <PopupContainer left={rect.right + 20} top={rect.top} ref={insideRef}>
      <Arrow arrowLeft={arrowLeft} />
      {children}
      <BtnIcon icon="close" onClick={handleClick} />
    </PopupContainer>,
    document.getElementById('overlay')
  );
};

export default TooltipPopup;
