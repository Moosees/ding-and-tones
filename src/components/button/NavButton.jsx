import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ isActive, theme }) =>
    isActive ? theme.borderHeavyDark : theme.borderHeavyLight};
  border-bottom-color: ${({ isActive, theme }) =>
    isActive ? theme.colorBox : theme.colorNavBorder};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  font-size: ${({ small }) => (small ? '1.5rem' : '1.8rem')};
  font-weight: 500;
  margin: -3px 1rem 0 0.75rem;
  padding: ${({ small }) => (small ? '0.4rem' : '0.4rem 1rem')};
  position: relative;
  top: 3px;
  transition: transform 0.1s ease-in;
  ${({ isActive }) => (isActive ? 'z-index: 10;' : '')}

  &:focus:not(.focus-visible) {
    outline: none;
  }

  &:hover {
    ${({ isActive }) => !isActive && 'transform: translateY(-2%) scale(1.04);'}
  }
`;

const NavButton = ({ isActive, label, onClick, small }) => {
  return (
    <Btn isActive={isActive} small={small} onClick={onClick}>
      {label}
    </Btn>
  );
};

export default NavButton;
