import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { checkSession } from '../../redux/user/user.actions';
import DropdownMobile from './dropdown/DropdownMobile';
import Logo from './logo/Logo';
import { LogoContainer, MobileAnchor } from './nav.styles';
import { getSongIdFromLocation } from './nav.utils';

const NavMobile = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const songId = getSongIdFromLocation(location);
    dispatch(checkSession(songId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <MobileAnchor>
      <LogoContainer
        ref={btnRef}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <Logo />
      </LogoContainer>
      {isOpen && <DropdownMobile btnRef={btnRef} isOpenCb={setIsOpen} />}
    </MobileAnchor>
  );
};

export default NavMobile;
