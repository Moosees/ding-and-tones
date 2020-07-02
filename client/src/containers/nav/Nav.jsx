import React from 'react';
import styled from 'styled-components';
import BtnNav from '../../components/button/Nav';

const Navbar = styled.nav`
  display: flex;
  margin-left: 10rem;
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
