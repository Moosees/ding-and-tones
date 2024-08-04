import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAlert } from '../../../redux/alert/alert.slice';
import {
  useLazyGetGoogleUrlQuery,
  useSignInMutation,
} from '../../../redux/user/user.api';
import PrivacyText from '../../privacy/PrivacyText';
import Checkbox from '../../shared/checkbox/Checkbox';
import Popup from '../../shared/popup/Popup';
import GoogleIcon from './GoogleIcon';
import { GoogleBtn, SignInContainer, TermsLink } from './signIn.styles';
import {
  getGoogleCode,
  getGoogleError,
  handleGooglePostMsg,
} from './signIn.utils';

const SignIn = ({ onClose }) => {
  const dispatch = useDispatch();
  const songId = useSelector(({ song }) => song.refs.songId);
  const scaleId = useSelector(({ scale }) => scale.ui.scaleId);

  const [getGoogleUrl] = useLazyGetGoogleUrlQuery();
  const [signIn] = useSignInMutation();

  const [privacyEmbedOpen, setPrivacyEmbedOpen] = useState(false);
  const [persistSession, setPersistSession] = useState(false);

  const handleSignIn = async () => {
    const url = await getGoogleUrl().unwrap();
    console.log({ url });

    handleGooglePostMsg(url)
      .then((msg) => {
        const code = getGoogleCode(msg);
        console.log({ code, msg });
        signIn({ code, songId, scaleId, persistSession });
      })
      .catch((error) => {
        const alert = getGoogleError(error);
        dispatch(createAlert({ alert }));
      });
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
          onClick={() => setPrivacyEmbedOpen(true)}
          $privacyEmbedOpen={privacyEmbedOpen}
        >
          terms and privacy policy.
        </TermsLink>
        {privacyEmbedOpen && <PrivacyText />}
      </SignInContainer>
    </Popup>
  );
};

export default SignIn;
