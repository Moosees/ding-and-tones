import React from 'react';
import { connect } from 'react-redux';
import useDimensions from '../../hooks/useDimensions';
import { setPrivacyOpen } from '../../redux/ui/ui.actions';
import { Copyright, MobileCopyright, PrivacyLink } from './privacy.styles';
import PrivacyPopup from './PrivacyPopup';

const Privacy = ({ setPrivacyOpen }) => {
  const { isMobile } = useDimensions();

  return (
    <>
      {isMobile ? (
        <MobileCopyright>&copy; 2022 Linus Almgren</MobileCopyright>
      ) : (
        <Copyright>
          Copyright &copy; 2022 Linus Almgren -{' '}
          <PrivacyLink onClick={() => setPrivacyOpen(true)}>
            Terms and privacy
          </PrivacyLink>
        </Copyright>
      )}
      <PrivacyPopup />
    </>
  );
};

export default connect(null, { setPrivacyOpen })(Privacy);
