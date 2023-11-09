import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../redux/user/user.actions';
import BtnMenu from '../../shared/button/BtnMenu';
import PopupSignIn from './PopupSignIn';

const SignIn = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      {isSignedIn ? (
        <BtnMenu
          label="Sign out"
          icon="directions_run"
          onClick={() => dispatch(signOut())}
        />
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
