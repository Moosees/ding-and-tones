import React, { useState } from 'react';
import { connect } from 'react-redux';
import BtnControls from '../button/Controls';
import PopupAccount from './PopupAccount';

const UserAccount = ({ newUser }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <BtnControls
        reverse
        label="Account"
        icon="person_outline"
        onClick={() => setPopupOpen(true)}
      />
      {(popupOpen || newUser) && (
        <PopupAccount onClose={() => setPopupOpen(false)} />
      )}
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  newUser: user.newUser,
});

export default connect(mapStateToProps)(UserAccount);
