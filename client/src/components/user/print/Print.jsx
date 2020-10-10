import React, { useState } from 'react';
import BtnControls from '../../shared/button/Controls';
import PrintArrangement from './PrintArrangement';

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
          <PrintArrangement onAfterPrint={() => setShowPrint(false)} />
        </div>
      )}
    </>
  );
};

export default Print;
