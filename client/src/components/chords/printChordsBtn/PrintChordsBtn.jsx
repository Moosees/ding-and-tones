import React, { lazy, Suspense, useState } from 'react';
import BtnPrimary from '../../shared/button/Primary';

const ChordsPrint = lazy(() => import('../../chordsPrint/ChordsPrint'));
const ReactToPrint = lazy(() =>
  import('../../shared/reactToPrint/ReactToPrint')
);

const PrintChordsBtn = () => {
  const [showPrint, setShowPrint] = useState(false);

  return (
    <>
      <BtnPrimary label="Print" light onClick={() => setShowPrint(true)} />
      <div
        style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          left: '0',
          top: '-30px',
          backgroundColor: '#fff',
          zIndex: '99999',
        }}
      >
        <ChordsPrint />
      </div>
      {/* {showPrint && (
        <Suspense>
          <ReactToPrint onAfterPrint={() => setShowPrint(false)}>
            <ChordsPrint />
          </ReactToPrint>
        </Suspense>
      )} */}
    </>
  );
};

export default PrintChordsBtn;
