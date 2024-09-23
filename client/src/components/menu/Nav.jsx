import React from 'react';
import { useSelector } from 'react-redux';
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
  const scaleId = useSelector(({ scale }) => scale.ui.scaleId);
  const songId = useSelector(({ song }) => song.refs.songId);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Navbar>
      <BtnNav
        label="Scale"
        isActive={pathname.startsWith('/scale')}
        onClick={() => navigate(`/scale${scaleId ? '/' + scaleId : ''}`)}
      />
      <BtnNav
        label="Chords"
        isActive={pathname === '/chords'}
        onClick={() => navigate('/chords')}
      />
      <BtnNav
        label="Song"
        isActive={pathname.startsWith('/song')}
        onClick={() => navigate(`/song${songId ? '/' + songId : ''}`)}
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
