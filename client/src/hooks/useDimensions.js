import { useEffect, useState } from 'react';

const useDimensions = () => {
  const [isMobile, setIsMobile] = useState(
    window ? window.innerHeight <= 1050 && window.innerWidth <= 1050 : true
  );
  const [height, setHeight] = useState(window ? window.innerHeight : 1050);
  const [width, setWidth] = useState(window ? window.innerWidth : 1050);

  useEffect(() => {
    if (window) {
      const updateDimensions = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        setIsMobile(window.innerHeight <= 1050 && window.innerWidth <= 1050);
      };

      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }
  });

  return [isMobile, height, width];
};

export default useDimensions;
