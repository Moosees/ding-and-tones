import React from 'react';
import { connect } from 'react-redux';
import { toggleAccount } from '../../../redux/user/user.actions';
import BtnControls from '../../shared/button/Controls';
import PopupAccount from './PopupAccount';

const Account = ({ accountOpen, toggleAccount }) => {
  return (
    <>
      <BtnControls
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

export default connect(mapStateToProps, { toggleAccount })(Account);
