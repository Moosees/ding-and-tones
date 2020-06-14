import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  border: ${({ theme }) => theme.borderLight};
  background-color: ${({ light, theme }) =>
    light ? theme.colorBtnLight : theme.colorBtnHeavy};
  border-radius: 3px;
  box-shadow: ${({ light, theme }) =>
    light ? theme.shadowBtnLight : theme.shadowBtnHeavy};
  cursor: pointer;
  margin: 0.5rem;
  min-width: 6rem;
  padding: 0.5rem;
  transition: border 0.15s ease-in;

  &:hover {
    border: ${({ theme }) => theme.borderMedium};
  }
`;

const BtnPrimary = ({ label, light, onClick }) => (
  <Btn light={light} onClick={onClick}>
    {label}
  </Btn>
);

export default BtnPrimary;
