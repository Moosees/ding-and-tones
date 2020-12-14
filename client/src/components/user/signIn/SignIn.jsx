import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../../redux/user/user.actions';
import BtnControls from '../../shared/button/Controls';
import PopupSignIn from './PopupSignIn';

const SignIn = ({ isSignedIn, signOut }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      {isSignedIn ? (
        <BtnControls
          label="Sign out"
          icon="directions_run"
          // onClick={handleSignOut}
        />
      ) : (
        <>
          <BtnControls
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

const mapStateToProps = ({ user }) => ({
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { signOut })(SignIn);
