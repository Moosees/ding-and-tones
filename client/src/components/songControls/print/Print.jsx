import React, { lazy, Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import BtnPrimary from '../../shared/button/BtnPrimary';
import PrintView from '../../songView/PrintView';

const ReactToPrint = lazy(() =>
  import('../../shared/reactToPrint/ReactToPrint')
);

const Print = () => {
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying
  );

  const [showPrint, setShowPrint] = useState(false);

  return (
    <>
      <BtnPrimary
        light
        label="Print"
        disabled={isSongPlaying}
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
