import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { AccountHeader, Background, Overlay } from './popup.styles';

const Popup = ({ children, header, onClose }) => {
  const overlayRef = useRef(null);

  const handleClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return createPortal(
    <Overlay ref={overlayRef} onClick={handleClick}>
      <Background onClick={(e) => e.stopPropagation()}>
        {header && <AccountHeader>{header}</AccountHeader>}
        {children}
      </Background>
    </Overlay>,
    document.getElementById('overlay')
  );
};

export default Popup;
