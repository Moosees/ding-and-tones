import React from 'react';
import { connect } from 'react-redux';
import { toggleAccount } from '../../redux/user/user.actions';
import BtnControls from '../button/Controls';
import PopupAccount from './PopupAccount';

const UserAccount = ({ accountOpen, toggleAccount }) => {
  return (
    <>
      <BtnControls
        reverse
        label="Account"
        icon="person_outline"
        onClick={toggleAccount}
      />
      {accountOpen && <PopupAccount />}
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  accountOpen: user.accountOpen,
});

export default connect(mapStateToProps, { toggleAccount })(UserAccount);
