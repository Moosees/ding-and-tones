import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const SpinDiv = styled.div`
  animation: ${spin} 1.5s linear infinite;
  border: 1px solid
    ${({ spin, theme }) => (spin ? theme.colorBeat : 'transparent')};
  border-left-color: transparent;
  border-right-color: transparent;
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
`;

const Spinner = ({ spin }) => {
  return <SpinDiv spin={spin} />;
};

export default Spinner;
