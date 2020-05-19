import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../components/button/Button';

const Nav = ({ history, location }) => {
  const { pathname } = location;

  return (
    <nav>
      <Button
        isActive={pathname === '/scale'}
        label="Scale"
        onClick={() => history.push('/scale')}
      />
      <Button
        isActive={pathname === '/chords'}
        label="Chords"
        onClick={() => history.push('/chords')}
      />
      <Button
        isActive={pathname === '/song'}
        label="Songwriter"
        onClick={() => history.push('/song')}
      />
      <Button
        isActive={pathname === '/find'}
        label="Find Songs"
        onClick={() => history.push('/find')}
      />
    </nav>
  );
};

export default withRouter(Nav);
