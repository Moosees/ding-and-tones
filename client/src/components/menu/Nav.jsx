import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BtnNav from '../shared/button/Nav';
import User from './user/User';

const Navbar = styled.nav`
  top: -3rem;
  display: flex;
  height: 3rem;
  margin-left: 10rem;
  position: absolute;
`;

const Nav = ({ scaleId, songId }) => {
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

const mapStateToProps = ({ scale, song }) => ({
  scaleId: scale.ui.scaleId,
  songId: song.ui.songId,
});

export default connect(mapStateToProps)(Nav);
