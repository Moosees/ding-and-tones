import { createContext, useEffect, useState } from 'react';

export const DimensionsContext = createContext();

const DimensionsProvider = ({ children }) => {
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

  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  return (
    <DimensionsContext.Provider value={{ isMobile, isTouch, height, width }}>
      {children}
    </DimensionsContext.Provider>
  );
};

export default DimensionsProvider;
