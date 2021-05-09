import React, { lazy, Suspense, useState } from 'react';
import BtnMenu from '../../shared/button/Menu';

const PrintView = lazy(() => import('../../songView/PrintView'));
const ReactToPrint = lazy(() =>
  import('../../shared/reactToPrint/ReactToPrint')
);

const Print = () => {
  const [showPrint, setShowPrint] = useState(false);

  return (
    <>
      <BtnMenu
        label="Print song"
        icon="print"
        onClick={() => setShowPrint(true)}
      />
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
