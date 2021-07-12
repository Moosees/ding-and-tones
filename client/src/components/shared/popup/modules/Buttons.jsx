import React from 'react';
import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Buttons = ({ children }) => {
  return <ButtonsWrapper>{children}</ButtonsWrapper>;
};

export default Buttons;
