import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BtnNav from '../shared/button/BtnNav';
import User from './user/User';

const Navbar = styled.nav`
  top: -3rem;
  display: flex;
  height: 3rem;
  margin-left: 10rem;
  position: absolute;
`;

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Navbar>
      <BtnNav
        label="Scale"
        isActive={pathname.startsWith('/scale')}
        onClick={() => navigate('/scale')}
      />
      <BtnNav
        label="Chords"
        isActive={pathname === '/chords'}
        onClick={() => navigate('/chords')}
      />
      <BtnNav
        label="Song"
        isActive={pathname.startsWith('/song')}
        onClick={() => navigate('/song')}
      />
      <BtnNav
        label="Find Songs"
        isActive={pathname === '/find'}
        onClick={() => navigate('/find')}
      />
      <User />
    </Navbar>
  );
};

export default Nav;
