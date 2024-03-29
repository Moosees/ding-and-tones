import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import useCloseOnEsc from '../../../hooks/useCloseOnEsc';
import Flex from './modules/Flex';
import Section from './modules/Section';
import SubHeading from './modules/SubHeading';
import { AccountHeader, Background, Overlay } from './popup.styles';

const Popup = ({ children, header, onClose }) => {
  useCloseOnEsc(onClose);

  const overlayRef = useRef(null);

  const handleClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return createPortal(
    <Overlay ref={overlayRef} onClick={handleClick}>
      <Background>
        {header && <AccountHeader>{header}</AccountHeader>}
        {children}
      </Background>
    </Overlay>,
    document.getElementById('overlay')
  );
};

Popup.Section = Section;
Popup.SubHeading = SubHeading;
Popup.Flex = Flex;

export default Popup;
