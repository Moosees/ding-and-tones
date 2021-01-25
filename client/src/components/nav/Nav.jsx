import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useDimensions from '../../hooks/useDimensions';
import BtnNav from '../shared/button/Nav';
import User from '../user/User';

const Navbar = styled.nav`
  top: -3rem;
  display: flex;
  height: 3rem;
  margin-left: 10rem;
  position: absolute;
`;

const Nav = ({ scaleId, songId }) => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { isMobile } = useDimensions();

  return (
    <Navbar>
      {isMobile && (
        <BtnNav
          label="Drum"
          isActive={'/drum' === pathname}
          onClick={() => push('/drum')}
        />
      )}
      <BtnNav
        label="Scale"
        isActive={`/scale${scaleId ? '/' + scaleId : ''}` === pathname}
        onClick={() => push(`/scale${scaleId ? '/' + scaleId : ''}`)}
      />
      {!isMobile && (
        <BtnNav
          label="Chords"
          isActive={'/chords' === pathname}
          onClick={() => push('/chords')}
        />
      )}
      <BtnNav
        label="Song"
        isActive={`/song${songId ? '/' + songId : ''}` === pathname}
        onClick={() => push(`/song${songId ? '/' + songId : ''}`)}
      />
      <BtnNav
        label="Find Songs"
        isActive={'/find' === pathname}
        onClick={() => push('/find')}
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
