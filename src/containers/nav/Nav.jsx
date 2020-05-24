import React from 'react';
import { withRouter } from 'react-router-dom';
import NavButton from '../../components/button/NavButton';

const Nav = ({ history, location }) => {
  const { pathname } = location;

  return (
    <nav>
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
    </nav>
  );
};

export default withRouter(Nav);
