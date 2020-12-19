import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../../redux/user/user.actions';
import Popup from '../../shared/popup/Popup';
import Privacy from '../../shared/privacy/Privacy';
import GoogleIcon from './GoogleIcon.jsx';
import { GoogleBtn, SignInContainer, TermsLink } from './signIn.styles';

const SignIn = ({ isSignedIn, onClose, signIn, signOut }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <Popup header="Sign in" onClose={onClose}>
      <SignInContainer>
        By using this website you agree to our{' '}
        <TermsLink onClick={() => setPrivacyOpen(true)}>
          terms and privacy policy.
        </TermsLink>
        <GoogleBtn onClick={signIn}>
          <GoogleIcon />
          <span>Sign in with Google</span>
        </GoogleBtn>
        {privacyOpen && <Privacy />}
      </SignInContainer>
    </Popup>
  );
};

const mapStateToProps = ({ user }) => ({
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { signIn, signOut })(SignIn);
