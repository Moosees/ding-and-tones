import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import useDimensions from '../../../hooks/useDimensions';
import Loading from '../../shared/loading/Loading';
import Start from '../../start/Start';

const Scale = lazy(() => import('../../scale/Scale'));
const Chords = lazy(() => import('../../chords/Chords'));
const ChordsMobile = lazy(() => import('../../chords/ChordsMobile'));
const Song = lazy(() => import('../../song/Song'));
const FindSongs = lazy(() => import('../../findSongs/FindSongs'));

const AppRoutes = () => {
  const { isMobile } = useDimensions();

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="scale" element={<Scale />} />
        <Route path="scale/:scaleId" element={<Scale />} />
        <Route
          path="chords/*"
          element={isMobile ? <ChordsMobile /> : <Chords />}
        />
        <Route path="song" element={<Song />} />
        <Route path="song/:songId" element={<Song />} />
        <Route path="find/*" element={<FindSongs />} />
        {/* <Route
          path="/find/:songId"
          element={<Navigate to="/song/:songId" replace />}
        /> */}
        <Route path="*" element={<Start />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
