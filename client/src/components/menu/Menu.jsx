import React from 'react';
import useCloseOutside from '../../hooks/useCloseOutside';
import BtnNav from '../shared/button/Nav';
import Account from './account/Account';
import Logo from './Logo';
import { MenuAnchor, MenuDropdown } from './menu.styles';
import Print from './print/Print';
import SignIn from './signIn/SignIn';
// import Sound from './sound/Sound';
// import BtnMenu from '../shared/button/Menu';

const Menu = () => {
  const [menuOpen, setMenuOpen, menuRef] = useCloseOutside(true);

  return (
    <MenuAnchor ref={menuRef}>
      <BtnNav
        ariaLabel={'Menu'}
        disabled={false}
        isActive={menuOpen}
        label={<Logo />}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && (
        <MenuDropdown>
          {/* <Sound /> */}
          {/* <BtnMenu label="Support me" icon="support" /> */}
          {/* <BtnMenu label="Help" icon="help_outline" /> */}
          <Print />
          <Account />
          <SignIn />
        </MenuDropdown>
      )}
    </MenuAnchor>
  );
};

export default Menu;
