import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BtnNavMain from '../shared/button/NavMain';

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
      <BtnNavMain label="Scale" to={`/scale${scaleId ? '/' + scaleId : ''}`} />
      <BtnNavMain label="Chords" to="/chords" />
      <BtnNavMain
        label="Songwriter"
        to={`/song${songId ? '/' + songId : ''}`}
      />
      <BtnNavMain label="Find Songs" to="/find" />
    </Navbar>
  );
};

const mapStateToProps = ({ scale, song }) => ({
  scaleId: scale.ui.scaleId,
  songId: song.ui.songId,
});

export default connect(mapStateToProps)(NavMain);
