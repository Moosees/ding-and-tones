import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import useDimensions from '../../../hooks/useDimensions';
import Loading from '../../shared/loading/Loading';

const Chords = lazy(() => import('../../chords/Chords'));
const FindSongs = lazy(() => import('../../findSongs/FindSongs'));
const MobileDrum = lazy(() => import('../../mobileDrum/MobileDrum'));
const Scale = lazy(() => import('../../scale/Scale'));
const Song = lazy(() => import('../../song/Song'));

const Routes = () => {
  const { isMobile } = useDimensions();

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/scale" children={<Scale />} />
        <Route path="/scale/:scaleId" children={<Scale />} />
        <Route
          exact
          path="/chords"
          children={isMobile ? <MobileDrum /> : <Chords />}
        />
        <Route exact path="/song" children={<Song />} />
        <Route path="/song/:songId" children={<Song />} />
        <Route exact path="/find" children={<FindSongs />} />
        <Redirect from="/find/:songId" to="/song/:songId" />
        <Redirect from="/" to="/scale" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
