import axios from 'axios';
import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { GOOGLE_CLIENT_ID } from '../../../assets/oauth';
import { signIn, signOut } from '../../../redux/user/user.actions';
import BtnControls from '../../shared/button/Controls';

const SignIn = ({ isSignedIn, signIn, signOut }) => {
  const handleSignIn = async (auth) => {
    try {
      const idToken = auth.getAuthResponse().id_token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;

      await axios
        .post('/signIn', {
          idToken,
        })
        .then((res) => {
          if (res.status === 200)
            signIn(
              res.data.anonymous ? 'Anonymous' : res.data.name,
              auth.isSignedIn(),
              res.data.anonymous,
              res.data.newUser
            );
        });
    } catch (error) {
      handleSignOut();
    }
  };

  const handleSignOut = () => {
    axios.defaults.headers.common['Authorization'] = 'Bearer undefined';
    signOut();
  };

  const handleAutoLoadFinished = (autoLoadFinished) => {
    if (!autoLoadFinished) handleSignOut();
  };

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
          onLogoutSuccess={handleSignOut}
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
          onSuccess={handleSignIn}
          onFailure={handleSignOut}
          onAutoLoadFinished={handleAutoLoadFinished}
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

export default connect(mapStateToProps, { signIn, signOut })(SignIn);
