import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAccount } from '../../../redux/user/user.actions';
import BtnMenu from '../../shared/button/BtnMenu';
import PopupAccount from './PopupAccount';

const Account = () => {
  const dispatch = useDispatch();
  const accountOpen = useSelector(({ user }) => user.accountOpen);
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);

  return (
    <>
      {isSignedIn && (
        <BtnMenu
          label="Account"
          icon="person_outline"
          onClick={() => dispatch(toggleAccount())}
        />
      )}
      {accountOpen && <PopupAccount />}
    </>
  );
};

export default Account;
