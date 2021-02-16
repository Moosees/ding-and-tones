import React from 'react';
import useCloseOutside from '../../hooks/useCloseOutside';
import Logo from './Logo';
import { LogoContainer, MobileAnchor } from './menu.styles';
import MobileDropdown from './MobileDropdown';

const NavMobile = () => {
  const { isOpen, setIsOpen, insideRef } = useCloseOutside(true);

  return (
    <MobileAnchor ref={insideRef}>
      <LogoContainer onClick={() => setIsOpen(!isOpen)}>
        <Logo />
      </LogoContainer>
      {isOpen && <MobileDropdown />}
    </MobileAnchor>
  );
};

export default NavMobile;
