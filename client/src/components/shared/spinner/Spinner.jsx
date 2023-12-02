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
  border: 1px solid ${({ theme }) => theme.colorBeat};
  border-left-color: transparent;
  border-right-color: transparent;
  border-radius: 100%;
  height: 2rem;
  opacity: ${({ $isSpinning }) => ($isSpinning ? '1' : '0')};
  position: absolute;
  transition: opacity 0.2s ease;
  right: 2px;
  width: 2rem;
`;

const Spinner = ({ isSpinning }) => {
  return <SpinDiv $isSpinning={isSpinning} />;
};

export default Spinner;
