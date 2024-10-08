import React from 'react';
import { createPortal } from 'react-dom';
import useCloseOnEsc from '../../../hooks/useCloseOnEsc';
import useCloseOutside from '../../../hooks/useCloseOutside';
import useDimensions from '../../../hooks/useDimensions';
import BtnIcon from '../button/BtnIcon';
import { Arrow, PopupContainer } from './tooltip.styles';

const TooltipPopup = ({ anchorRef, children, isOpenCb }) => {
  useCloseOnEsc(() => isOpenCb(false));
  const { insideRef } = useCloseOutside(isOpenCb, anchorRef);
  const { width } = useDimensions();
  const rect = anchorRef.current.getBoundingClientRect();
  const openRight = rect.left + rect.width / 2 < width / 2;
  const vertPos = openRight
    ? rect.right + 20
    : document.body.clientWidth - rect.left + 20;
  const top = rect.top + rect.height / 2;

  const handleClick = () => {
    isOpenCb(false);
  };

  return createPortal(
    <PopupContainer
      ref={insideRef}
      $openRight={openRight}
      $vertPos={vertPos}
      $top={top}
    >
      <Arrow $openRight={openRight} />
      {children}
      <BtnIcon icon="close" onClick={handleClick} />
    </PopupContainer>,
    document.getElementById('overlay'),
  );
};

export default TooltipPopup;
