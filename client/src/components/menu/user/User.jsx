import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useCheckSessionQuery } from '../../../redux/user/user.api';
import BtnNav from '../../shared/button/BtnNav';
import Dropdown from '../dropdown/Dropdown';
import { MenuAnchor } from '../nav.styles';
import { getIdFromLocation } from '../nav.utils';

const User = () => {
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
  console.log({ checkSessionQueryData, fetchSessionTried });
  useCheckSessionQuery(checkSessionQueryData, { skip: fetchSessionTried });

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
