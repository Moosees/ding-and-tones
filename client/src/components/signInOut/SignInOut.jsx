import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { GOOGLE_CLIENT_ID } from '../../oauth';
import { signIn, signOut } from '../../redux/user/user.actions';
import BtnControls from '../button/Controls';

const SignInOut = ({ isSignedIn, signIn, signOut }) => {
  const handleFailure = (res) => {
    signOut();
  };

  const handleSignIn = async (res) => {
    try {
      const idToken = res.getAuthResponse().id_token;
      // send sign in request to server, await user
      signIn({ name: 'Test' }, res.isSignedIn());
    } catch (error) {
      console.error('Sign in failed');
    }
  };

  const handleSignOut = (res) => {
    // send sign out request
    signOut();
  };

  return (
    <>
      {isSignedIn ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <BtnControls
              reverse
              label="Sign Out"
              icon="directions_run"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
          buttonText="Sign Out"
          onLogoutSuccess={handleSignOut}
        />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <BtnControls
              reverse
              label="Sign In"
              icon="login"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
          buttonText="Sign In"
          onSuccess={handleSignIn}
          onFailure={handleFailure}
          isSignedIn={true}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { signIn, signOut })(SignInOut);
