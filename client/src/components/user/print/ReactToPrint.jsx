import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import PrintArrangement from '../../printArrangement/PrintArrangement';

const ReactToPrint = ({ onAfterPrint }) => {
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

  return <PrintArrangement ref={componentRef} />;
};

export default ReactToPrint;
