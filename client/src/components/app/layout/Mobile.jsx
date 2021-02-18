import React, { lazy, Suspense } from 'react';
import NavMobile from '../../menu/NavMobile';
import Loading from '../../shared/loading/Loading';
import { MobileCopyright, MobileLayout } from './layout.styles';

const Routes = lazy(() => import('../routes/Routes'));

const Mobile = () => {
  return (
    <MobileLayout>
      <NavMobile />
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
      <MobileCopyright>&copy; 2021 Linus Almgren</MobileCopyright>
    </MobileLayout>
  );
};

export default Mobile;
