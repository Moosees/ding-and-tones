import React, { lazy, Suspense } from 'react';
import NavMobile from '../../nav/NavMobile';
import Loading from '../../shared/loading/Loading';
import { MobileLayout } from './layout.styles';

const Routes = lazy(() => import('../routes/Routes'));

const Mobile = () => {
  return (
    <MobileLayout>
      <NavMobile />
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </MobileLayout>
  );
};

export default Mobile;
