import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import useDimensions from '../../hooks/useDimensions';
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

const Layout = ({ setDropdownForBeat, setPrivacyOpen }) => {
  const [isMobile] = useDimensions();

  const handleViewport = (e) => {
    e.stopPropagation();
    setDropdownForBeat(null);
  };

  return (
    <Viewport onClick={handleViewport}>
      <LayoutGrid id="outsideTarget" isMobile={isMobile}>
        {!isMobile && (
          <>
            <Drum style={{ gridArea: 'drum' }} />
            <BorderContainer small style={{ gridArea: 'controls' }}>
              <Intervals />
            </BorderContainer>
          </>
        )}
        <SectionWithNav style={{ gridArea: 'main' }}>
          <Nav />
          <BorderContainer>
            <Suspense fallback={<Loading />}>
              <Routes />
            </Suspense>
          </BorderContainer>
        </SectionWithNav>
        <AlertHandler />
      </LayoutGrid>
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

export default connect(null, { setDropdownForBeat, setPrivacyOpen })(Layout);
