import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { BorderContainer, Column, Section, Viewport } from './app.styles';
import Loading from './components/loading/Loading';
import AlertHandler from './components/popup/Alert';
import Controls from './containers/controls/Controls';
import ControlsNav from './containers/controls/ControlsNav';
import Nav from './containers/nav/Nav';
import { setDropdownForBeat } from './redux/ui/ui.actions';

const AppRoutes = lazy(() => import('./AppRoutes'));
const Drum = lazy(() => import('./containers/drum/Drum'));

const App = ({ setDropdownForBeat }) => {
  const handleViewport = (e) => {
    e.stopPropagation();
    setDropdownForBeat(null);
  };

  return (
    <Viewport onClick={handleViewport}>
      <Column>
        <Suspense fallback={<Loading />}>
          <Drum />
        </Suspense>
        <Section maxWidth="35rem">
          <ControlsNav />
          <BorderContainer small>
            <Controls />
          </BorderContainer>
        </Section>
      </Column>
      <Column>
        <Section>
          <Nav />
          <BorderContainer>
            <Suspense fallback={<Loading />}>
              <AppRoutes />
            </Suspense>
          </BorderContainer>
        </Section>
      </Column>
      <AlertHandler />
    </Viewport>
  );
};

export default connect(null, { setDropdownForBeat })(App);
