import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import BtnNav from '../../components/button/Nav';

const Navbar = styled.nav`
  display: flex;
  margin-left: 10rem;
`;

const Nav = ({ history, location }) => {
  const { pathname } = location;

  return (
    <Navbar>
      <BtnNav
        isActive={pathname === '/scale'}
        label="Scale"
        onClick={() => history.push('/scale')}
      />
      <BtnNav
        isActive={pathname === '/chords'}
        label="Chords"
        onClick={() => history.push('/chords')}
      />
      <BtnNav
        isActive={pathname === '/song'}
        label="Songwriter"
        onClick={() => history.push('/song')}
      />
      <BtnNav
        isActive={pathname === '/find'}
        label="Find Songs"
        onClick={() => history.push('/find')}
      />
    </Navbar>
  );
};

export default withRouter(Nav);
