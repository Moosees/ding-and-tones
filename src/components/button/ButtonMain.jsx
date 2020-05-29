import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin: 0.5rem;
  min-width: 6rem;
  padding: 0.5rem;
  transition: border 0.15s ease-in;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const ButtonMain = ({ label, onClick }) => <Btn onClick={onClick}>{label}</Btn>;

export default ButtonMain;
