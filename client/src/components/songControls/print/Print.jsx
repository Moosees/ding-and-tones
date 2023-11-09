import React, { lazy, Suspense, useState } from 'react';
import { connect } from 'react-redux';
import BtnPrimary from '../../shared/button/BtnPrimary';
import PrintView from '../../songView/PrintView';

const ReactToPrint = lazy(() =>
  import('../../shared/reactToPrint/ReactToPrint')
);

const Print = ({ isSongPlaying }) => {
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

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(Print);
