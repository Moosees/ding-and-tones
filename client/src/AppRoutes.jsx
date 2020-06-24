import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Chords from './containers/chords/Chords';
import FindSongs from './containers/findSongs/FindSongs';
import Scale from './containers/scale/Scale';
import Songwriter from './containers/songwriter/Songwriter';

const AppRoutes = () => (
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
);

export default AppRoutes;
