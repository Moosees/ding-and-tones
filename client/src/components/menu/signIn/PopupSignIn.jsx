import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../redux/user/user.actions';
import PrivacyText from '../../privacy/PrivacyText';
import Checkbox from '../../shared/checkbox/Checkbox';
import Popup from '../../shared/popup/Popup';
import GoogleIcon from './GoogleIcon.jsx';
import { GoogleBtn, SignInContainer, TermsLink } from './signIn.styles';

const SignIn = ({ onClose }) => {
  const dispatch = useDispatch();
  const songId = useSelector(({ song }) => song.ui.songId);

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
        <GoogleBtn onClick={() => dispatch(signIn(songId, persist))}>
          <GoogleIcon />
          <span>Sign in with Google</span>
        </GoogleBtn>
        By using this website you agree to our{' '}
        <TermsLink
          onClick={() => setPrivacyOpen(true)}
          $privacyOpen={privacyOpen}
        >
          terms and privacy policy.
        </TermsLink>
        {privacyOpen && <PrivacyText />}
      </SignInContainer>
    </Popup>
  );
};

export default SignIn;
