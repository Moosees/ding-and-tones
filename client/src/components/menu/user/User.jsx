import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useLazyCheckSessionQuery } from '../../../redux/api/api.slice';
import BtnNav from '../../shared/button/BtnNav';
import Dropdown from '../dropdown/Dropdown';
import { MenuAnchor } from '../nav.styles';
import { getIdFromLocation } from '../nav.utils';

const User = () => {
  const songId = useSelector(({ song }) => song.refs.songId);
  const scaleId = useSelector(({ scale }) => scale.ui.scaleId);
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying,
  );

  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  const location = useLocation();
  const [checkSession, { isUninitialized, isLoading }] =
    useLazyCheckSessionQuery();

  useEffect(() => {
    if (isUninitialized) {
      const { urlSongId, urlScaleId } = getIdFromLocation(location);
      const checkSessionQueryData = {
        songId: urlSongId || songId || null,
        scaleId: urlScaleId || scaleId || null,
      };

      console.log('CHECK SESSION', { checkSessionQueryData });
      checkSession(checkSessionQueryData);
    }
  }, [checkSession, isUninitialized, location, scaleId, songId]);

  useEffect(() => {
    if (!isOpen || !isSongPlaying) return;

    setIsOpen(false);
  }, [isOpen, isSongPlaying]);

  return (
    <div>
      <BtnNav
        ariaLabel={'User'}
        disabled={isSongPlaying || isLoading}
        isActive={isOpen}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        ref={btnRef}
        label="User"
      />
      <MenuAnchor>
        {isOpen && <Dropdown btnRef={btnRef} isOpenCb={setIsOpen} />}
      </MenuAnchor>
    </div>
  );
};

export default User;
