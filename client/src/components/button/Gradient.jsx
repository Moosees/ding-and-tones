import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-image: linear-gradient(
    to bottom,
    #ccc 0%,
    ${({ theme }) => theme.colorBox} 100%
  );
  border: ${({ theme }) => theme.borderMedium};
  border-radius: 2px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 3px;
  margin: 1px;
  min-width: 2rem;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  transition: border 0.15s ease-in;

  &:hover {
    border: ${({ disabled, theme }) =>
      disabled ? theme.borderMedium : theme.borderLight};
  }
`;

const BtnGradient = ({ disabled, label, onClick }) => (
  <Btn disabled={disabled} onClick={onClick}>
    {label}
  </Btn>
);

export default BtnGradient;
