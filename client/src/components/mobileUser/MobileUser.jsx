import React from 'react';
import useCloseOutside from '../../hooks/useCloseOutside';
import Account from '../controls/account/Account';
import SignIn from '../controls/signIn/SignIn';
import Sound from '../controls/sound/Sound';
import BtnControls from '../shared/button/Controls';
import BtnNavMain from '../shared/button/NavMain';
import { UserAnchor, UserMenu } from './mobileUser.styles';

const MobileUser = () => {
  const [menuOpen, setMenuOpen, menuRef, btnRef] = useCloseOutside(false);

  return (
    <UserAnchor>
      <BtnNavMain
        isActive={menuOpen}
        label="User"
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

export default MobileUser;
