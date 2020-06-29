import axios from 'axios';
import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { GOOGLE_CLIENT_ID } from '../../oauth';
import { signIn, signOut } from '../../redux/user/user.actions';
import BtnControls from '../button/Controls';

const SignInOut = ({ isSignedIn, signIn, signOut }) => {
  const handleSignIn = async (auth) => {
    try {
      const idToken = auth.getAuthResponse().id_token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;

      await axios
        .post('/signIn', {
          idToken,
        })
        .then((res) => {
          if (res.status !== 200 && res.status !== 201)
            throw new Error('Could not sign in');

          signIn(res.data.user, auth.isSignedIn(), res.status === 201);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = () => {
    axios.defaults.headers.common['Authorization'] = '';
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
          onSuccess={handleSignIn}
          onFailure={handleSignOut}
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
