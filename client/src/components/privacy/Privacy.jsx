import React from 'react';
import { useDispatch } from 'react-redux';
import useDimensions from '../../hooks/useDimensions';
import { setPrivacyOpen } from '../../redux/ui/ui.actions';
import PrivacyPopup from './PrivacyPopup';
import { Copyright, MobileCopyright, PrivacyLink } from './privacy.styles';

const Privacy = () => {
  const dispatch = useDispatch();
  const { isMobile } = useDimensions();

  return (
    <>
      {isMobile ? (
        <MobileCopyright>&copy; 2023 Linus Almgren</MobileCopyright>
      ) : (
        <Copyright>
          Copyright &copy; 2023 Linus Almgren -{' '}
          <PrivacyLink onClick={() => dispatch(setPrivacyOpen(true))}>
            Terms and privacy
          </PrivacyLink>
        </Copyright>
      )}
      <PrivacyPopup />
    </>
  );
};

export default Privacy;
