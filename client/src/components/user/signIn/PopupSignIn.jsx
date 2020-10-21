import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { GOOGLE_CLIENT_ID } from '../../../oauth';
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

  return (
    <Popup header="Sign in" onClose={onClose}>
      <SignInContainer>
        By signing in you agree to our{' '}
        <TermsLink onClick={() => setPrivacyOpen(true)}>
          terms and privacy policy
        </TermsLink>
        <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID}
          onSuccess={signIn}
          onFailure={signOut}
          cookiePolicy={'single_host_origin'}
        />
        {privacyOpen && <Privacy />}
      </SignInContainer>
    </Popup>
  );
};

const mapStateToProps = ({ user }) => ({
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { signIn, signOut })(SignIn);
