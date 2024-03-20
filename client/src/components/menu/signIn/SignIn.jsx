import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSignOutMutation } from '../../../redux/user/user.api';
import BtnMenu from '../../shared/button/BtnMenu';
import PopupSignIn from './PopupSignIn';

const SignIn = () => {
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);
  const [signOut] = useSignOutMutation();

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      {isSignedIn ? (
        <BtnMenu label="Sign out" icon="directions_run" onClick={signOut} />
      ) : (
        <>
          <BtnMenu
            label="Sign in"
            icon="login"
            iconJustify="-2"
            onClick={() => setPopupOpen(true)}
          />
          {popupOpen && <PopupSignIn onClose={() => setPopupOpen(false)} />}
        </>
      )}
    </>
  );
};

export default SignIn;
