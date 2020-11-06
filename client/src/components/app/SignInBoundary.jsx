import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GOOGLE_CLIENT_ID } from '../../oauth';
import { signIn, signOut } from '../../redux/user/user.actions';
import Loading from '../shared/loading/Loading';

const SignInBoundary = ({ children, signIn, singOut }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadAuth = () => {
      if (!window.gapi) return setLoaded(true);
      // console.log(gapiScript.getAttribute('gapi_processed'));
      let iterations = 0;
      const gapiInterval = setInterval(() => {
        ++iterations;
        if (iterations >= 50) {
          clearInterval(gapiInterval);
          return setLoaded(true);
        }

        if (window.gapi.load) {
          clearInterval(gapiInterval);

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
        }
      }, 100);
    };

    const gapiScript = document.createElement('script');
    gapiScript.src = 'https://apis.google.com/js/api.js';
    gapiScript.type = 'text/javascript';
    gapiScript.async = true;
    gapiScript.onload = loadAuth;
    document.body.appendChild(gapiScript);
  }, [signIn]);

  return <>{loaded ? children : <Loading />}</>;
};

export default connect(null, { signIn, signOut })(SignInBoundary);
