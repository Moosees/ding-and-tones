import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { checkSession } from '../../redux/user/user.actions';
import DropdownMobile from './dropdown/DropdownMobile';
import Logo from './logo/Logo';
import { LogoContainer, MobileAnchor } from './nav.styles';

const NavMobile = ({ checkSession }) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <MobileAnchor>
      <LogoContainer ref={btnRef} onClick={() => setIsOpen(!isOpen)}>
        <Logo />
      </LogoContainer>
      {isOpen && <DropdownMobile btnRef={btnRef} isOpenCb={setIsOpen} />}
    </MobileAnchor>
  );
};

export default connect(null, { checkSession })(NavMobile);
