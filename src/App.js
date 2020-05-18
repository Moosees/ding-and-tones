import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {
  MainContainer,
  MainContent,
  SecondaryContent,
  Viewport,
} from './app.styles';
import Chords from './containers/chords/Chords';
import Controls from './containers/controls/Controls';
import Drum from './containers/drum/Drum';
import FindSongs from './containers/findSongs/FindSongs';
import Nav from './containers/nav/Nav';
import Scale from './containers/scale/Scale';
import Songwriter from './containers/songwriter/Songwriter';
import { saveScale } from './redux/scale/scale.actions';

// const dummyScale = ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'];
const dummyScale = ['A2', 'C3', 'E3', 'C3', 'F3', 'G3', 'A3', 'B3', 'E4', 'C4'];

const App = ({ saveScale }) => {
  useEffect(() => {
    saveScale('A Integral', 'round', dummyScale);
  }, [saveScale]);

  return (
    <Router>
      <Viewport>
        <SecondaryContent>
          <Drum />
          <Controls />
        </SecondaryContent>
        <MainContent>
          <Nav />
          <MainContainer>
            <Switch>
              <Route path="/scale">
                <Scale />
              </Route>
              <Route path="/chords">
                <Chords />
              </Route>
              <Route path="/song">
                <Songwriter />
              </Route>
              <Route path="/find">
                <FindSongs />
              </Route>
              <Route path="/">
                <Redirect to="/scale" />
              </Route>
            </Switch>
          </MainContainer>
        </MainContent>
      </Viewport>
    </Router>
  );
};

export default connect(null, { saveScale })(App);
