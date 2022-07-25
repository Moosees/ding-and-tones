import React, { lazy, Suspense } from 'react';
import NavMobile from '../../menu/NavMobile';
import Loading from '../../shared/loading/Loading';
import { MobileLayout } from './layout.styles';

const AppRoutes = lazy(() => import('../routes/AppRoutes'));

const Mobile = () => {
  return (
    <MobileLayout>
      <NavMobile />
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </MobileLayout>
  );
};

export default Mobile;
