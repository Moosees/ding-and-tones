import React from 'react';
import { connect } from 'react-redux';
import { toggleAccount } from '../../../redux/user/user.actions';
import BtnMenu from '../../shared/button/Menu';
import PopupAccount from './PopupAccount';

const Account = ({ accountOpen, isSignedIn, toggleAccount }) => {
  return (
    <>
      {isSignedIn && (
        <BtnMenu
          label="Account"
          icon="person_outline"
          onClick={toggleAccount}
        />
      )}
      {accountOpen && <PopupAccount />}
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  accountOpen: user.accountOpen,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { toggleAccount })(Account);
