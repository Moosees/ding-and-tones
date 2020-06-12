import React from 'react';
import { withRouter } from 'react-router-dom';
import NavButton from '../../components/button/NavButton';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  margin-left: 10rem;
`;

const Nav = ({ history, location }) => {
  const { pathname } = location;

  return (
    <Navbar>
      <NavButton
        isActive={pathname === '/scale'}
        label="Scale"
        onClick={() => history.push('/scale')}
      />
      <NavButton
        isActive={pathname === '/chords'}
        label="Chords"
        onClick={() => history.push('/chords')}
      />
      <NavButton
        isActive={pathname === '/song'}
        label="Songwriter"
        onClick={() => history.push('/song')}
      />
      <NavButton
        isActive={pathname === '/find'}
        label="Find Songs"
        onClick={() => history.push('/find')}
      />
    </Navbar>
  );
};

export default withRouter(Nav);
