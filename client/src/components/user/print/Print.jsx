import React, { useState } from 'react';
import BtnControls from '../../shared/button/Controls';
import ReactToPrint from './ReactToPrint';

const Print = () => {
  const [showPrint, setShowPrint] = useState(false);

  return (
    <>
      <BtnControls
        label="Print song"
        icon="print"
        onClick={() => setShowPrint(true)}
      />
      {showPrint && (
        <div style={{ display: 'none' }}>
          <ReactToPrint onAfterPrint={() => setShowPrint(false)} />
        </div>
      )}
    </>
  );
};

export default Print;
