import React, { lazy, Suspense, useState } from 'react';
import BtnMenu from '../../shared/button/Menu';

const ReactToPrint = lazy(() => import('./ReactToPrint'));

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
        <div style={{ display: 'none' }}>
          <Suspense>
            <ReactToPrint onAfterPrint={() => setShowPrint(false)} />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Print;
