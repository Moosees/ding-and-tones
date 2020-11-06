import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signIn, signOut } from '../../../redux/user/user.actions';
import Popup from '../../shared/popup/Popup';
import Privacy from '../../shared/privacy/Privacy';

const SignInContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  max-width: 60rem;
  padding: 2rem;
`;

const TermsLink = styled.a`
  text-decoration: underline;
  padding-bottom: 1rem;
`;

const SignIn = ({ isSignedIn, onClose, signIn, signOut }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    window.gapi.load('signin2', () => {
      window.gapi.signin2.render('googleSignIn', {
        scope: 'email',
        width: 180,
        height: 40,
        longtitle: false,
        theme: 'dark',
        onsuccess: signIn,
        onfailure: signOut,
      });
    });
  }, [signIn, signOut]);

  return (
    <Popup header="Sign in" onClose={onClose}>
      <SignInContainer>
        By using this website you agree to our{' '}
        <TermsLink onClick={() => setPrivacyOpen(true)}>
          terms and privacy policy.
        </TermsLink>
        <div id="googleSignIn" />
        {privacyOpen && <Privacy />}
      </SignInContainer>
    </Popup>
  );
};

const mapStateToProps = ({ user }) => ({
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { signIn, signOut })(SignIn);
