import React from 'react';
import useCloseOutside from '../../hooks/useCloseOutside';
import BtnControls from '../shared/button/Controls';
import BtnNavMain from '../shared/button/NavMain';
import Account from './account/Account';
import Logo from './Logo';
import SignIn from './signIn/SignIn';
import Sound from './sound/Sound';
import { UserAnchor, UserLabel, UserMenu } from './user.styles';

const User = () => {
  const [menuOpen, setMenuOpen, menuRef, btnRef] = useCloseOutside(false);

  return (
    <UserAnchor>
      <BtnNavMain
        isActive={menuOpen}
        label={<Logo />}
        onClick={() => setMenuOpen(!menuOpen)}
        ref={btnRef}
      />
      <UserMenu open={menuOpen} ref={menuRef}>
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
