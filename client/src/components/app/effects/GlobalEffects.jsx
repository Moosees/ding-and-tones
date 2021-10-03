import React from 'react';
import useResetCurrentBeat from './useResetCurrentBeat';

const GlobalEffects = ({ children }) => {
  useResetCurrentBeat();

  return <>{children}</>;
};

export default GlobalEffects;
