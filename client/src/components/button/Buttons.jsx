import styled from 'styled-components';
import React from 'react';

const BtnContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${({ position }) => (position ? position : 'flex-end')};
  width: 100%;
`;

const Buttons = ({ children, position }) => (
  <BtnContainer position={position}>{children}</BtnContainer>
);

export default Buttons;
