import React from 'react';
import { connect } from 'react-redux';
import BtnControls from '../../../components/button/Controls';
import { toggleAccount } from '../../../redux/user/user.actions';
import PopupAccount from './PopupAccount';

const Account = ({ accountOpen, reverse, toggleAccount }) => {
  return (
    <>
      <BtnControls
        reverse={reverse}
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
