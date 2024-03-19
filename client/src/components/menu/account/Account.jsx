import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BtnMenu from '../../shared/button/BtnMenu';
import PopupAccount from './PopupAccount';

const Account = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);

  return (
    <>
      {isSignedIn && (
        <BtnMenu
          label="Account"
          icon="person_outline"
          onClick={() => setAccountOpen(true)}
        />
      )}
      {accountOpen && <PopupAccount onClose={() => setAccountOpen(false)} />}
    </>
  );
};

export default Account;
