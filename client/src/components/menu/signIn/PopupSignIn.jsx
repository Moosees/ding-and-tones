import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../../redux/user/user.actions';
import Checkbox from '../../shared/checkbox/Checkbox';
import Popup from '../../shared/popup/Popup';
import Privacy from '../../shared/privacy/Privacy';
import GoogleIcon from './GoogleIcon.jsx';
import { GoogleBtn, SignInContainer, TermsLink } from './signIn.styles';

const SignIn = ({ isSignedIn, onClose, signIn, signOut, songId }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [persist, setPersist] = useState(false);

  return (
    <Popup header="Sign in" onClose={onClose}>
      <SignInContainer>
        <Checkbox
          label="Remember me fo 30 days"
          checked={persist}
          onChange={() => setPersist((persist) => !persist)}
        />
        <GoogleBtn onClick={() => signIn(songId, persist)}>
          <GoogleIcon />
          <span>Sign in with Google</span>
        </GoogleBtn>
        By using this website you agree to our{' '}
        <TermsLink onClick={() => setPrivacyOpen(true)}>
          terms and privacy policy.
        </TermsLink>
        {privacyOpen && <Privacy />}
      </SignInContainer>
    </Popup>
  );
};

const mapStateToProps = ({ song, user }) => ({
  songId: song.ui.songId,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { signIn, signOut })(SignIn);
