import React, { lazy, Suspense } from 'react';
import MenuMobile from '../../menu/MenuMobile';
import Loading from '../../shared/loading/Loading';
import { MobileLayout } from './layout.styles';

const Routes = lazy(() => import('../routes/Routes'));

const Mobile = () => {
  return (
    <MobileLayout>
      <MenuMobile />
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </MobileLayout>
  );
};

export default Mobile;
