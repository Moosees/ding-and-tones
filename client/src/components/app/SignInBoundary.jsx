import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GOOGLE_CLIENT_ID } from '../../oauth';
import { signIn, signOut } from '../../redux/user/user.actions';
import Loading from '../shared/loading/Loading';

const SignInBoundary = ({ children, signIn, singOut }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id: process.env.GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID,
        })
        .then(
          (auth) => {
            if (auth.isSignedIn.get()) signIn(auth.currentUser.get());

            setLoaded(true);
          },
          (error) => {
            signOut(error);
            setLoaded(true);
          }
        );
    });
  }, [signIn]);

  return <>{loaded ? children : <Loading />}</>;
};

export default connect(null, { signIn, signOut })(SignInBoundary);
