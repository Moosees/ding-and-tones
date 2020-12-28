import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from '../shared/loading/Loading';

const Chords = lazy(() => import('../chords/Chords'));
const FindSongs = lazy(() => import('../findSongs/FindSongs'));
const MobileDrum = lazy(() => import('../mobileDrum/MobileDrum'));
const Scale = lazy(() => import('../scale/Scale'));
const Songwriter = lazy(() => import('../songwriter/Songwriter'));

const Routes = ({ mobile }) => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {mobile && <Route exact path="/drum" children={<MobileDrum />} />}
      <Route exact path="/scale" children={<Scale />} />
      <Route path="/scale/:scaleId" children={<Scale />} />
      {!mobile && <Route exact path="/chords" children={<Chords />} />}
      <Route exact path="/song" children={<Songwriter />} />
      <Route path="/song/:songId" children={<Songwriter />} />
      <Route exact path="/find" children={<FindSongs />} />
      <Redirect from="/find/:songId" to="/song/:songId" />
      <Redirect from="/" to={mobile ? '/drum' : '/scale'} />
    </Switch>
  </Suspense>
);

export default Routes;
