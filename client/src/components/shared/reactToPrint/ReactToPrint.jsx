import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const ReactToPrint = ({ children, onAfterPrint }) => {
  const componentRef = useRef(null);
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
    <div style={{ display: 'none' }}>
      <div ref={componentRef}>{children}</div>
    </div>
  );
};

export default ReactToPrint;
