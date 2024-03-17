import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import BtnNav from '../../shared/button/BtnNav';
import Dropdown from '../dropdown/Dropdown';
import { MenuAnchor } from '../nav.styles';
import { getSongIdFromLocation } from '../nav.utils';
import { useLazyCheckSessionQuery } from '../../../redux/user/userSlice';

const User = () => {
  const dispatch = useDispatch();
  const [checkSessionTrigger] = useLazyCheckSessionQuery();

  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    console.log('checking session', { location });
    const checkSession = async () => {
      const songId = getSongIdFromLocation(location);
      console.log('songId: ', songId);
      const res = await checkSessionTrigger({ songId }, true).unwrap();
      console.log({ res });
    };

    checkSession();
    // dispatch(checkSession(songId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkSessionTrigger]);

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
