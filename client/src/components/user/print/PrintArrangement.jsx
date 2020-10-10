import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintArrangement = ({ onAfterPrint }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: onAfterPrint,
    onPrintError: onAfterPrint,
    removeAfterPrint: true,
  });

  useEffect(() => {
    handlePrint();
  }, [handlePrint]);

  return (
    <div ref={componentRef}>
      <h1>Title</h1>
      <div>Bars...</div>
    </div>
  );
};

export default PrintArrangement;
