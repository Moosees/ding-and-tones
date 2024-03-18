import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useCheckSessionQuery } from '../../redux/user/userSlice';
import DropdownMobile from './dropdown/DropdownMobile';
import Logo from './logo/Logo';
import { LogoContainer, MobileAnchor } from './nav.styles';
import { getSongIdFromLocation } from './nav.utils';

const NavMobile = () => {
  const fetchSessionTried = useSelector(({ user }) => user.fetchSessionTried);
  const songId = useSelector(({ song }) => song.ui.songId);

  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  const location = useLocation();
  const urlSongId = getSongIdFromLocation(location);
  const checkSessionQueryData = urlSongId || songId || null;
  console.log({ checkSessionQueryData });
  useCheckSessionQuery({ checkSessionQueryData }, { skip: fetchSessionTried });

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
