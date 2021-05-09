import React, { lazy, Suspense, useState } from 'react';
import BtnPrimary from '../../shared/button/Primary';

const ChordsPrint = lazy(() => import('../../chordsPrint/ChordsPrint'));
const ReactToPrint = lazy(() =>
  import('../../shared/reactToPrint/ReactToPrint')
);

const Print = () => {
  const [showPrint, setShowPrint] = useState(false);

  return (
    <>
      <BtnPrimary label="Print" light onClick={() => setShowPrint(true)} />
      {showPrint && (
        <Suspense>
          <ReactToPrint onAfterPrint={() => setShowPrint(false)}>
            <ChordsPrint />
          </ReactToPrint>
        </Suspense>
      )}
    </>
  );
};

export default Print;
