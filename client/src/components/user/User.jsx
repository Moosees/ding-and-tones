import React from 'react';
import useCloseOutside from '../../hooks/useCloseOutside';
import BtnNav from '../shared/button/Nav';
import Account from './account/Account';
import Logo from './Logo';
import Print from './print/Print';
import SignIn from './signIn/SignIn';
import { UserAnchor, UserMenu } from './user.styles';
// import Sound from './sound/Sound';
// import BtnControls from '../shared/button/Controls';

const User = () => {
  const [menuOpen, setMenuOpen, menuRef] = useCloseOutside(true);

  return (
    <UserAnchor ref={menuRef}>
      <BtnNav
        ariaLabel={'Menu'}
        disabled={false}
        isActive={menuOpen}
        label={<Logo />}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && (
        <UserMenu>
          {/* <Sound /> */}
          {/* <BtnControls label="Support me" icon="support" /> */}
          {/* <BtnControls label="Help" icon="help_outline" /> */}
          <Print />
          <Account />
          <SignIn />
        </UserMenu>
      )}
    </UserAnchor>
  );
};

export default User;
