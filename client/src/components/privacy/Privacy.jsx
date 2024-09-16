import React from 'react';
import { useDispatch } from 'react-redux';
import useDimensions from '../../hooks/useDimensions';
import { setPrivacyOpen } from '../../redux/user/user.slice';
import PrivacyPopup from './PrivacyPopup';
import { Copyright, MobileCopyright, PrivacyLink } from './privacy.styles';

const Privacy = () => {
  const dispatch = useDispatch();
  const { isMobile } = useDimensions();

  return (
    <>
      {isMobile ? (
        <MobileCopyright>&copy; Linus Almgren</MobileCopyright>
      ) : (
        <Copyright>
          Copyright &copy; Linus Almgren -{' '}
          <PrivacyLink
            onClick={() => dispatch(setPrivacyOpen({ privacyOpen: true }))}
          >
            Terms and privacy
          </PrivacyLink>
        </Copyright>
      )}
      <PrivacyPopup />
    </>
  );
};

export default Privacy;
