import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BtnNav from '../button/Nav';

const Navbar = styled.nav`
  top: -3rem;
  display: flex;
  height: 3rem;
  margin-left: 10rem;
  position: absolute;
`;

const NavMain = ({ scaleId, songId }) => {
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

export default connect(mapStateToProps)(NavMain);
