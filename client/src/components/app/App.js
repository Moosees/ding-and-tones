import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { setDropdownForBeat } from '../../redux/ui/ui.actions';
import Controls from '../controls/Controls';
import Drum from '../drum/Drum';
import NavMain from '../navMain/NavMain';
import NavSmall from '../navSmall/NavSmall';
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
  const handleViewport = (e) => {
    e.stopPropagation();
    setDropdownForBeat(null);
  };

  return (
    <Viewport onClick={handleViewport}>
      <LayoutGrid>
        <Drum style={{ gridArea: 'drum' }} />
        <SectionWithNav style={{ gridArea: 'controls' }}>
          <NavSmall />
          <BorderContainer small>
            <Controls />
          </BorderContainer>
        </SectionWithNav>
        <SectionWithNav style={{ gridArea: 'main' }}>
          <NavMain />
          <BorderContainer>
            <Suspense fallback={<Loading />}>
              <Routes />
            </Suspense>
          </BorderContainer>
        </SectionWithNav>
      </LayoutGrid>
      <AlertHandler />
    </Viewport>
  );
};

export default connect(null, { setDropdownForBeat })(App);
