import React, { lazy, Suspense } from 'react';
import Drum from '../../drum/Drum';
import Intervals from '../../intervals/Intervals';
import Nav from '../../menu/Nav';
import Loading from '../../shared/loading/Loading';
import { BorderContainer, LargeLayout, SectionWithNav } from './layout.styles';

const AppRoutes = lazy(() => import('../routes/AppRoutes'));

const Large = () => {
  return (
    <LargeLayout>
      <Drum style={{ gridArea: 'drum' }} />
      <BorderContainer style={{ gridArea: 'controls' }} $small>
        <Intervals />
      </BorderContainer>
      <SectionWithNav style={{ gridArea: 'main' }}>
        <Nav />
        <BorderContainer>
          <Suspense fallback={<Loading />}>
            <AppRoutes />
          </Suspense>
        </BorderContainer>
      </SectionWithNav>
    </LargeLayout>
  );
};

export default Large;
