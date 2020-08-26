import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from '../shared/loading/Loading';
import SignInBoundary from './SignInBoundary';

const Chords = lazy(() => import('../chords/Chords'));
const FindSongs = lazy(() => import('../findSongs/FindSongs'));
const Scale = lazy(() => import('../scale/Scale'));
const Songwriter = lazy(() => import('../songwriter/Songwriter'));

const Routes = () => (
  <SignInBoundary>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/scale" children={<Scale />} />
        <Route path="/scale/:scaleId" children={<Scale />} />
        <Route exact path="/chords" children={<Chords />} />
        <Route exact path="/song" children={<Songwriter />} />
        <Route path="/song/:songId" children={<Songwriter />} />
        <Route exact path="/find" children={<FindSongs />} />
        <Redirect from="/find/:songId" to="/song/:songId" />
        <Redirect from="/" to="/scale" />
      </Switch>
    </Suspense>
  </SignInBoundary>
);

export default Routes;
