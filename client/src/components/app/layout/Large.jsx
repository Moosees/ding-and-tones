import React, { lazy, Suspense } from 'react';
import Drum from '../../drum/Drum';
import Intervals from '../../intervals/Intervals';
import NavLarge from '../../nav/NavLarge';
import Loading from '../../shared/loading/Loading';
import { BorderContainer, LargeLayout, SectionWithNav } from './layout.styles';

const Routes = lazy(() => import('../routes/Routes'));

const Large = () => {
  return (
    <LargeLayout>
      <Drum style={{ gridArea: 'drum' }} />
      <BorderContainer small style={{ gridArea: 'controls' }}>
        <Intervals />
      </BorderContainer>
      <SectionWithNav style={{ gridArea: 'main' }}>
        <NavLarge />
        <BorderContainer>
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
        </BorderContainer>
      </SectionWithNav>
    </LargeLayout>
  );
};

export default Large;
