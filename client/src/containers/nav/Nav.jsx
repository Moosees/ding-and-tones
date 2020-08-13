import React from 'react';
import styled from 'styled-components';
import BtnNav from '../../components/button/Nav';
import { connect } from 'react-redux';

const Navbar = styled.nav`
  top: -3rem;
  display: flex;
  height: 3rem;
  margin-left: 10rem;
  position: absolute;
`;

const Nav = ({ scaleId, songId }) => {
  return (
    <Navbar>
      <BtnNav label="Scale" to={`/scale${scaleId ? '/' + scaleId : ''}`} />
      <BtnNav label="Chords" to="/chords" />
      <BtnNav label="Songwriter" to={`/song${songId ? '/' + songId : ''}`} />
      <BtnNav label="Find Songs" to="/find" />
    </Navbar>
  );
};

const mapStateToProps = ({ scale, song }) => ({
  scaleId: scale.ui.scaleId,
  songId: song.ui.songId,
});

export default connect(mapStateToProps)(Nav);
