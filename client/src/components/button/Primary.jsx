import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  border: ${({ theme }) => theme.borderLight};
  background-color: ${({ light, theme }) =>
    light ? theme.colorBtnLight : theme.colorBtnHeavy};
  border-radius: 3px;
  box-shadow: ${({ light, theme }) =>
    light ? theme.shadowBtnLight : theme.shadowBtnHeavy};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  margin: 0.5rem;
  min-width: 6rem;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  padding: 0.5rem;
  transition: border 0.15s ease-in;
  

  &:hover {
    border: ${({ disabled, theme }) =>
      disabled ? theme.borderLight : theme.borderMedium};
  }
  }
`;

const BtnPrimary = ({ disabled, label, light, onClick }) => (
  <Btn disabled={disabled} light={light} onClick={onClick}>
    {label}
  </Btn>
);

export default BtnPrimary;
