import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BorderContainer, Column, Section, Viewport } from './app.styles';
import AppRoutes from './AppRoutes';
import Controls from './containers/controls/Controls';
import ControlsNav from './containers/controls/ControlsNav';
import Drum from './containers/drum/Drum';
import Nav from './containers/nav/Nav';
import { saveScale } from './redux/scale/scale.actions';
import { setDropdownForBeat } from './redux/ui/ui.actions';

const dummyScale = ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'];

const App = ({ saveScale, setDropdownForBeat }) => {
  useEffect(() => {
    saveScale('A Integral', 'round', dummyScale);
  }, [saveScale]);

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
    </Viewport>
  );
};

export default connect(null, { saveScale, setDropdownForBeat })(App);