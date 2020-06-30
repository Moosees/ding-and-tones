import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Chords from './containers/chords/Chords';
import FindSongs from './containers/findSongs/FindSongs';
import Scale from './containers/scale/Scale';
import Songwriter from './containers/songwriter/Songwriter';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/scale" children={<Scale />} />
    <Route path="/scale/:scaleId" children={<Scale />} />
    <Route exact path="/chords" children={<Chords />} />
    <Route exact path="/song" children={<Songwriter />} />
    <Route exact path="/find" children={<FindSongs />} />
    <Route path="/">
      <Redirect to="/scale" />
    </Route>
  </Switch>
);

export default AppRoutes;
