import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { checkSession } from '../../../redux/user/user.actions';
import BtnNav from '../../shared/button/BtnNav';
import Dropdown from '../dropdown/Dropdown';
import { MenuAnchor } from '../nav.styles';
import { getSongIdFromLocation } from '../nav.utils';

const User = () => {
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
    <div>
      <BtnNav
        ariaLabel={'User'}
        disabled={false}
        isActive={isOpen}
        onClick={() => setIsOpen(!isOpen)}
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
