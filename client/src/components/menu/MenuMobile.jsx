import React from 'react';
import useCloseOutside from '../../hooks/useCloseOutside';
import Logo from './Logo';
import { LogoContainer, MobileAnchor } from './menu.styles';
import MobileDropdown from './MobileDropdown';

const NavMobile = () => {
  const [menuOpen, setMenuOpen, menuRef] = useCloseOutside(true);

  return (
    <MobileAnchor ref={menuRef}>
      <LogoContainer onClick={() => setMenuOpen(!menuOpen)}>
        <Logo />
      </LogoContainer>
      {menuOpen && <MobileDropdown />}
    </MobileAnchor>
  );
};

export default NavMobile;
