import React, { lazy, Suspense, useState } from 'react';
import BtnPrimary from '../../shared/button/Primary';
import PrintView from '../../songView/PrintView';
import { connect } from 'react-redux';

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
