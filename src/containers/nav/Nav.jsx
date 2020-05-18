import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/scale">
        <button>Scale</button>
      </Link>
      <Link to="/chords">
        <button>Chords</button>
      </Link>
      <Link to="/song">
        <button>Songwriter</button>
      </Link>
      <Link to="find">
        <button>Find Songs</button>
      </Link>
    </nav>
  );
};

export default Nav;
