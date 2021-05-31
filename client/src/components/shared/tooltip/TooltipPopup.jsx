import React from 'react';
import useCloseOutside from '../../../hooks/useCloseOutside';
import { Arrow } from './tooltip.styles';

const TooltipPopup = ({ btnRef, children, dropdownPosRef, isOpenCb }) => {
  const { insideRef } = useCloseOutside(isOpenCb, btnRef);

  return (
    <>
      <Arrow />
      <div ref={insideRef}>{children}</div>
    </>
  );
};

export default TooltipPopup;
