import React from 'react';
import { connect } from 'react-redux';
import useDimensions from '../../../hooks/useDimensions';
import { setPrivacyOpen } from '../../../redux/ui/ui.actions';
import Alert from '../../alert/Alert';
import PopupPrivacy from '../effects/PopupPrivacy';
import Large from './Large';
import { Copyright, PrivacyLink, Viewport } from './layout.styles';
import Mobile from './Mobile';

const App = ({ setPrivacyOpen }) => {
  const { isMobile } = useDimensions();

  return (
    <Viewport id="outsideTarget" isMobile={isMobile}>
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
      <Alert />
    </Viewport>
  );
};

export default connect(null, { setPrivacyOpen })(App);
