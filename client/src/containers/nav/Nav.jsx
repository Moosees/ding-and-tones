import React from 'react';
import styled from 'styled-components';
import BtnNav from '../../components/button/Nav';

const Navbar = styled.nav`
  top: -3rem;
  display: flex;
  height: 3rem;
  margin-left: 10rem;
  position: absolute;
`;

const Nav = () => {
  return (
    <Navbar>
      <BtnNav label="Scale" to="/scale" />
      <BtnNav label="Chords" to="/chords" />
      <BtnNav label="Songwriter" to="/song" />
      <BtnNav label="Find Songs" to="/find" />
    </Navbar>
  );
};

export default Nav;
