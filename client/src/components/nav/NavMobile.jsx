import React from 'react';
import Logo from '../user/Logo';
import styled from 'styled-components';

const NavContainer = styled.div`
  align-items: center;
  display: flex;
  height: 5rem;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 5rem;
`;

const NavMobile = () => {
  return (
    <NavContainer>
      <Logo />
    </NavContainer>
  );
};

export default NavMobile;
