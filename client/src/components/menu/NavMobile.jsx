import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useLazyCheckSessionQuery } from '../../redux/api/api.slice';
import DropdownMobile from './dropdown/DropdownMobile';
import Logo from './logo/Logo';
import { LogoContainer, MobileAnchor } from './nav.styles';
import { getIdFromLocation } from './nav.utils';

const NavMobile = () => {
  const songId = useSelector(({ song }) => song.refs.songId);
  const scaleId = useSelector(({ scale }) => scale.ui.scaleId);

  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  const location = useLocation();
  const [checkSession, { isUninitialized }] = useLazyCheckSessionQuery();

  useEffect(() => {
    if (isUninitialized) {
      const { urlSongId, urlScaleId } = getIdFromLocation(location);
      const checkSessionQueryData = {
        songId: urlSongId || songId || null,
        scaleId: urlScaleId || scaleId || null,
      };

      checkSession(checkSessionQueryData);
    }
  }, [checkSession, isUninitialized, location, scaleId, songId]);

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
