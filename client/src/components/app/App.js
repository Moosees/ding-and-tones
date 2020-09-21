import React, { lazy, Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setDropdownForBeat } from '../../redux/ui/ui.actions';
import Controls from '../controls/Controls';
import Drum from '../drum/Drum';
import NavMain from '../nav/NavMain';
import NavSide from '../nav/NavSide';
import Loading from '../shared/loading/Loading';
import AlertHandler from './AlertHandler';
import {
  BorderContainer,
  LayoutGrid,
  SectionWithNav,
  Viewport,
} from './app.styles';

const Routes = lazy(() => import('./Routes'));

const App = ({ setDropdownForBeat }) => {
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
            <SectionWithNav style={{ gridArea: 'controls' }}>
              <NavSide />
              <BorderContainer small>
                <Controls />
              </BorderContainer>
            </SectionWithNav>
          </>
        )}
        <SectionWithNav style={{ gridArea: 'main' }}>
          <NavMain mobile={width < 1000} />
          <BorderContainer>
            <Suspense fallback={<Loading />}>
              <Routes mobile={width < 1000} />
            </Suspense>
          </BorderContainer>
        </SectionWithNav>
      </LayoutGrid>

      <AlertHandler />
    </Viewport>
  );
};

export default connect(null, { setDropdownForBeat })(App);
