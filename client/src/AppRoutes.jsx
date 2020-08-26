import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from './components/loading/Loading';
import SignInBoundary from './components/singInBoundary/SignInBoundary';

const Chords = lazy(() => import('./containers/chords/Chords'));
const FindSongs = lazy(() => import('./containers/findSongs/FindSongs'));
const Scale = lazy(() => import('./containers/scale/Scale'));
const Songwriter = lazy(() => import('./components/songwriter/Songwriter'));

const AppRoutes = () => (
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

export default AppRoutes;
