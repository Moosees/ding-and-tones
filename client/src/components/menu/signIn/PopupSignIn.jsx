import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useLazyGetGoogleUrlQuery,
  useSignInMutation,
} from '../../../redux/user/user.api.js';
import PrivacyText from '../../privacy/PrivacyText';
import Checkbox from '../../shared/checkbox/Checkbox';
import Popup from '../../shared/popup/Popup';
import GoogleIcon from './GoogleIcon.jsx';
import { GoogleBtn, SignInContainer, TermsLink } from './signIn.styles';
import { getGoogleCode, handleGooglePostMsg } from './signIn.utils.js';

const SignIn = ({ onClose }) => {
  const songId = useSelector(({ song }) => song.ui.songId);
  const [getGoogleUrl] = useLazyGetGoogleUrlQuery();
  const [signIn] = useSignInMutation();

  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [persistSession, setPersistSession] = useState(false);

  const handleSignIn = async () => {
    const url = await getGoogleUrl().unwrap();
    console.log({ url });
    const msg = await handleGooglePostMsg(url);
    const code = getGoogleCode(msg);
    console.log({ code, msg });
    await signIn({ code, songId, persistSession });
  };

  return (
    <Popup header="Sign in" onClose={onClose}>
      <SignInContainer>
        <Checkbox
          label="Remember me fo 30 days"
          checked={persistSession}
          onChange={() =>
            setPersistSession((persistSession) => !persistSession)
          }
        />
        <GoogleBtn onClick={handleSignIn}>
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
