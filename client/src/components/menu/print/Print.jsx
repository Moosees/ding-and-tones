import React, { useState } from 'react';
import BtnMenu from '../../shared/button/Menu';
import ReactToPrint from './ReactToPrint';

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
          <ReactToPrint onAfterPrint={() => setShowPrint(false)} />
        </div>
      )}
    </>
  );
};

export default Print;
