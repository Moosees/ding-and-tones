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
  const { scaleId, songId } = useSelector(({ scale, song }) => ({
    scaleId: scale.ui.scaleId,
    songId: song.ui.songId,
  }));

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Navbar>
      <BtnNav
        label="Scale"
        isActive={`/scale${scaleId ? '/' + scaleId : ''}` === pathname}
        onClick={() => navigate(`/scale${scaleId ? '/' + scaleId : ''}`)}
      />
      <BtnNav
        label="Chords"
        isActive={'/chords' === pathname}
        onClick={() => navigate('/chords')}
      />
      <BtnNav
        label="Song"
        isActive={`/song${songId ? '/' + songId : ''}` === pathname}
        onClick={() => navigate(`/song${songId ? '/' + songId : ''}`)}
      />
      <BtnNav
        label="Find Songs"
        isActive={'/find' === pathname}
        onClick={() => navigate('/find')}
      />
      <User />
    </Navbar>
  );
};

export default Nav;
