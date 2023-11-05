import React, { lazy, Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import ChordsPrint from '../../chordsPrint/ChordsPrint';
import BtnPrimary from '../../shared/button/Primary';

const ReactToPrint = lazy(() =>
  import('../../shared/reactToPrint/ReactToPrint')
);

const PrintChordsBtn = () => {
  const isSongPlaying = useSelector(({ ui }) => ui.isSongPlaying);
  const [showPrint, setShowPrint] = useState(false);

  return (
    <>
      <BtnPrimary
        label="Print Chords"
        disabled={isSongPlaying}
        light
        onClick={() => setShowPrint(true)}
      />
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

export default PrintChordsBtn;
