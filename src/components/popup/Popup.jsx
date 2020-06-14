import React, { useRef } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  align-items: center;
  background-color: rgba(20, 20, 20, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
`;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colorBox};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 30rem;
  padding: 3rem;
`;

const Popup = ({ children, onClose }) => {
  const overlayRef = useRef(null);

  const handleClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <Overlay ref={overlayRef} onClick={handleClick}>
      <Background onClick={(e) => e.preventDefault()}>{children}</Background>
    </Overlay>
  );
};

export default Popup;
