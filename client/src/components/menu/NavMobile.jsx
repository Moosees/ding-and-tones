import React, { useRef, useState } from 'react';
import MobileDropdown from './dropdown/DropdownMobile';
import Logo from './logo/Logo';
import { LogoContainer, MobileAnchor } from './nav.styles';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  return (
    <MobileAnchor>
      <LogoContainer ref={btnRef} onClick={() => setIsOpen(!isOpen)}>
        <Logo />
      </LogoContainer>
      {isOpen && <MobileDropdown btnRef={btnRef} isOpenCb={setIsOpen} />}
    </MobileAnchor>
  );
};

export default NavMobile;
