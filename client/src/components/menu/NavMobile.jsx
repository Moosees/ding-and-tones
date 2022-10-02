import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { checkSession } from '../../redux/user/user.actions';
import DropdownMobile from './dropdown/DropdownMobile';
import Logo from './logo/Logo';
import { LogoContainer, MobileAnchor } from './nav.styles';
import { getSongIdFromLocation } from './nav.utils';

const NavMobile = ({ checkSession }) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const songId = getSongIdFromLocation(location);
    checkSession(songId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
