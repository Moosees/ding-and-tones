import React from 'react';
import { connect } from 'react-redux';
import useDimensions from '../../../hooks/useDimensions';
import { setPrivacyOpen } from '../../../redux/ui/ui.actions';
import AlertHandler from './AlertHandler';
import Large from './Large';
import { Copyright, PrivacyLink, Viewport } from './layout.styles';
import Mobile from './Mobile';
import PopupPrivacy from './PopupPrivacy';

const App = ({ setPrivacyOpen }) => {
  const { isMobile } = useDimensions();

  return (
    <Viewport id="outsideTarget">
      {isMobile ? <Mobile /> : <Large />}
      {!isMobile && (
        <Copyright>
          Copyright &copy; 2021 Linus Almgren -{' '}
          <PrivacyLink onClick={() => setPrivacyOpen(true)}>
            Terms and privacy
          </PrivacyLink>
        </Copyright>
      )}
      <PopupPrivacy />
      <AlertHandler />
    </Viewport>
  );
};

export default connect(null, { setPrivacyOpen })(App);
