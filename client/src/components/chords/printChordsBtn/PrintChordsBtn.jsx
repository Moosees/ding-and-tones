import React, { lazy, Suspense, useState } from 'react';
import { connect } from 'react-redux';
import ChordsPrint from '../../chordsPrint/ChordsPrint';
import BtnPrimary from '../../shared/button/Primary';

const ReactToPrint = lazy(() =>
  import('../../shared/reactToPrint/ReactToPrint')
);

const PrintChordsBtn = ({ isSongPlaying }) => {
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

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(PrintChordsBtn);
