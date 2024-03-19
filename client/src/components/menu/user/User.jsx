import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useCheckSessionQuery } from '../../../redux/user/user.api';
import BtnNav from '../../shared/button/BtnNav';
import Dropdown from '../dropdown/Dropdown';
import { MenuAnchor } from '../nav.styles';
import { getSongIdFromLocation } from '../nav.utils';

const User = () => {
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
    <div>
      <BtnNav
        ariaLabel={'User'}
        disabled={false}
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
