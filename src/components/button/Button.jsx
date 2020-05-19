import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: rgba(0, 0, 0, 0.03);
  border: 3px solid ${({ isActive }) => (isActive ? '#000' : '#777')};
  border-bottom-color: ${({ isActive }) => (isActive ? '#ddd' : '#000')};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  font-size: ${({ isSmall }) => (isSmall ? '1.5rem' : '1.8rem')};
  font-weight: 500;
  margin: -3px 1rem 0 0.75rem;
  padding: ${({ isSmall }) => (isSmall ? '0.4rem' : '0.4rem 1rem')};
  position: relative;
  top: 3px;
  transition: transform 0.1s ease-in;
  z-index: ${({ isActive }) => (isActive ? '10' : '1')};

  &:focus:not(.focus-visible) {
    outline: none;
  }

  &:hover {
    ${({ isActive }) => !isActive && 'transform: translateY(-2%) scale(1.04);'}
  }
`;

const Button = ({ isActive, label, onClick, isSmall }) => {
  return (
    <Btn isActive={isActive} isSmall={isSmall} onClick={onClick}>
      {label}
    </Btn>
  );
};

export default Button;
