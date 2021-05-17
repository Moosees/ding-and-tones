import React, { lazy, Suspense, useState } from 'react';
import BtnPrimary from '../../shared/button/Primary';
import PrintView from '../../songView/PrintView';

const ReactToPrint = lazy(() =>
  import('../../shared/reactToPrint/ReactToPrint')
);

const Print = () => {
  const [showPrint, setShowPrint] = useState(false);

  return (
    <>
      <BtnPrimary light label="Print" onClick={() => setShowPrint(true)} />
      {showPrint && (
        <Suspense>
          <ReactToPrint onAfterPrint={() => setShowPrint(false)}>
            <PrintView />
          </ReactToPrint>
        </Suspense>
      )}
    </>
  );
};

export default Print;
