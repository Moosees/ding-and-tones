import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { GOOGLE_CLIENT_ID } from '../../../assets/oauth';
import { signIn, signOut } from '../../../redux/user/user.actions';
import BtnControls from '../../shared/button/Controls';
import PopupSignIn from './PopupSignIn';

const SignIn = ({ isSignedIn, signIn, signOut }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      {isSignedIn ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <BtnControls
              label="Sign out"
              icon="directions_run"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
          onLogoutSuccess={signOut}
          onFailure={signOut}
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

export default connect(mapStateToProps, { signIn, signOut })(SignIn);
