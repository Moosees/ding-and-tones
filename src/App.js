import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {
  MainContent,
  MainContainer,
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

const App = () => {
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

export default App;
