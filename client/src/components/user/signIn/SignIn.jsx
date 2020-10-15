import React from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { GOOGLE_CLIENT_ID } from '../../../assets/oauth';
import { signIn, signOut } from '../../../redux/user/user.actions';
import BtnControls from '../../shared/button/Controls';

const SignIn = ({ isSignedIn, signIn, signOut }) => {
  return (
    <>
      {isSignedIn ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <BtnControls
              label="Sign Out"
              icon="directions_run"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
          onLogoutSuccess={signOut}
          onFailure={signOut}
        />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <BtnControls
              label="Sign In"
              icon="login"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
          onSuccess={signIn}
          onFailure={signOut}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { signIn, signOut })(SignIn);
