import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useCheckSessionQuery } from '../../redux/user/user.api';
import DropdownMobile from './dropdown/DropdownMobile';
import Logo from './logo/Logo';
import { LogoContainer, MobileAnchor } from './nav.styles';
import { getIdFromLocation } from './nav.utils';

const NavMobile = () => {
  const fetchSessionTried = useSelector(({ user }) => user.fetchSessionTried);
  const songId = useSelector(({ song }) => song.refs.songId);
  const scaleId = useSelector(({ scale }) => scale.ui.scaleId);

  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  const location = useLocation();
  const { urlSongId, urlScaleId } = getIdFromLocation(location);
  const checkSessionQueryData = {
    songId: urlSongId || songId || null,
    scaleId: urlScaleId || scaleId || null,
  };
  console.log({ checkSessionQueryData });
  useCheckSessionQuery(checkSessionQueryData, { skip: fetchSessionTried });

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
