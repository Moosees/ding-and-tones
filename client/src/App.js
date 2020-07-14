import React from 'react';
import { connect } from 'react-redux';
import { BorderContainer, Column, Section, Viewport } from './app.styles';
import AppRoutes from './AppRoutes';
import AlertHandler from './components/popup/Alert';
import Controls from './containers/controls/Controls';
import ControlsNav from './containers/controls/ControlsNav';
import Drum from './containers/drum/Drum';
import Nav from './containers/nav/Nav';
import { setDropdownForBeat } from './redux/ui/ui.actions';

const App = ({ setDropdownForBeat }) => {
  const handleViewport = (e) => {
    e.stopPropagation();
    setDropdownForBeat(null);
  };

  return (
    <Viewport onClick={handleViewport}>
      <Column>
        <Drum />
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
            <AppRoutes />
          </BorderContainer>
        </Section>
      </Column>
      <AlertHandler />
    </Viewport>
  );
};

export default connect(null, { setDropdownForBeat })(App);
