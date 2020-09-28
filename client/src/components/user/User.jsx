import React from 'react';
import useCloseOutside from '../../hooks/useCloseOutside';
import BtnControls from '../shared/button/Controls';
import BtnNav from '../shared/button/Nav';
import Account from './account/Account';
import Logo from './Logo';
import SignIn from './signIn/SignIn';
import Sound from './sound/Sound';
import { UserAnchor, UserMenu } from './user.styles';

const User = () => {
  const [menuOpen, setMenuOpen, menuRef] = useCloseOutside(false);

  return (
    <UserAnchor ref={menuRef}>
      <BtnNav
        disabled={false}
        isActive={menuOpen}
        label={<Logo />}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <UserMenu open={menuOpen}>
        <Sound reverse />
        <BtnControls reverse label="Print/Save" icon="print" />
        <BtnControls reverse label="Support me" icon="support" />
        <BtnControls reverse label="Help" icon="help_outline" />
        <Account reverse />
        <SignIn reverse />
      </UserMenu>
    </UserAnchor>
  );
};

export default User;
