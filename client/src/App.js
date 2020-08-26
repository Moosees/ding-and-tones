import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BorderContainer,
  LayoutGrid,
  SectionWithNav,
  Viewport,
} from './app.styles';
import Loading from './components/loading/Loading';
import NavControls from './components/navControls/NavControls';
import NavMain from './components/navMain/NavMain';
import AlertHandler from './components/popup/Alert';
import Controls from './containers/controls/Controls';
import Drum from './containers/drum/Drum';
import { setDropdownForBeat } from './redux/ui/ui.actions';

const AppRoutes = lazy(() => import('./AppRoutes'));

const App = ({ setDropdownForBeat }) => {
  const handleViewport = (e) => {
    e.stopPropagation();
    setDropdownForBeat(null);
  };

  return (
    <Viewport onClick={handleViewport}>
      <LayoutGrid>
        <Drum style={{ gridArea: 'drum' }} />
        <SectionWithNav style={{ gridArea: 'controls' }}>
          <NavControls />
          <BorderContainer small>
            <Controls />
          </BorderContainer>
        </SectionWithNav>
        <SectionWithNav style={{ gridArea: 'main' }}>
          <NavMain />
          <BorderContainer>
            <Suspense fallback={<Loading />}>
              <AppRoutes />
            </Suspense>
          </BorderContainer>
        </SectionWithNav>
      </LayoutGrid>
      <AlertHandler />
    </Viewport>
  );
};

export default connect(null, { setDropdownForBeat })(App);
