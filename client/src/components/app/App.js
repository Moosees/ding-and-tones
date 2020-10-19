import React, { lazy, Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setDropdownForBeat, setPrivacyOpen } from '../../redux/ui/ui.actions';
import Drum from '../drum/Drum';
import Intervals from '../intervals/Intervals';
import Nav from '../nav/Nav';
import Loading from '../shared/loading/Loading';
import AlertHandler from './AlertHandler';
import {
  BorderContainer,
  Copyright,
  LayoutGrid,
  PrivacyLink,
  SectionWithNav,
  Viewport,
} from './app.styles';
import PopupPrivacy from './PopupPrivacy';

const Routes = lazy(() => import('./Routes'));

const App = ({ setDropdownForBeat, setPrivacyOpen }) => {
  const [width, setWidth] = useState(window ? window.innerWidth : 1200);

  useEffect(() => {
    if (window) {
      const updateWidth = () => setWidth(window.innerWidth);

      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  });

  const handleViewport = (e) => {
    e.stopPropagation();
    setDropdownForBeat(null);
  };

  return (
    <Viewport onClick={handleViewport}>
      <LayoutGrid id="outsideTarget">
        {width > 1000 && (
          <>
            <Drum style={{ gridArea: 'drum' }} />
            <BorderContainer small>
              <Intervals />
            </BorderContainer>
          </>
        )}
        <SectionWithNav style={{ gridArea: 'main' }}>
          <Nav mobile={width < 1000} />
          <BorderContainer>
            <Suspense fallback={<Loading />}>
              <Routes mobile={width < 1000} />
            </Suspense>
          </BorderContainer>
        </SectionWithNav>
      </LayoutGrid>
      <AlertHandler />
      <Copyright>
        Copyright &copy; 2020 Linus Almgren -{' '}
        <PrivacyLink onClick={() => setPrivacyOpen(true)}>
          Terms and privacy
        </PrivacyLink>
        <PopupPrivacy />
      </Copyright>
    </Viewport>
  );
};

export default connect(null, { setDropdownForBeat, setPrivacyOpen })(App);
