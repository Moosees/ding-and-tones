import React from 'react';
import { connect } from 'react-redux';
import useDimensions from '../../../hooks/useDimensions';
import {
  setDropdownForBeat,
  setPrivacyOpen,
} from '../../../redux/ui/ui.actions';
import AlertHandler from './AlertHandler';
import { Copyright, PrivacyLink, Viewport } from './layout.styles';
import PopupPrivacy from './PopupPrivacy';
import Large from './Large';
import Mobile from './Mobile';

const App = ({ setDropdownForBeat, setPrivacyOpen }) => {
  const { isMobile } = useDimensions();

  const handleViewport = (e) => {
    e.stopPropagation();
    setDropdownForBeat(null);
  };

  return (
    <Viewport onClick={handleViewport} id="outsideTarget">
      {isMobile ? <Mobile /> : <Large />}
      {!isMobile && (
        <Copyright>
          Copyright &copy; 2021 Linus Almgren -{' '}
          <PrivacyLink onClick={() => setPrivacyOpen(true)}>
            Terms and privacy
          </PrivacyLink>
          <PopupPrivacy />
        </Copyright>
      )}
      <AlertHandler />
    </Viewport>
  );
};

export default connect(null, { setDropdownForBeat, setPrivacyOpen })(App);
