import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { GOOGLE_CLIENT_ID } from '../../assets/oauth';
import { signIn, signOut } from '../../redux/user/user.actions';
import Loading from '../shared/loading/Loading';

const SignInBoundary = ({ children, signIn, singOut }) => {
  const { loaded } = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID,
    isSignedIn: true,
    cookiePolicy: 'single_host_origin',
    onSuccess: (auth) => signIn(auth),
    onFailure: (res) => signOut(res),
  });

  return <>{loaded ? children : <Loading />}</>;
};

export default connect(null, { signIn, signOut })(SignInBoundary);
