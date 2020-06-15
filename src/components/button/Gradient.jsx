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
  color: ${({ theme }) => theme.colorText};
  cursor: pointer;
  padding: 3px;
  margin: 1px;
  min-width: 2rem;
  transition: border 0.15s ease-in;

  &:hover {
    border: ${({ theme }) => theme.borderLight};
  }
`;

const BtnGradient = ({ label, onClick }) => (
  <Btn onClick={onClick}>{label}</Btn>
);

export default BtnGradient;
