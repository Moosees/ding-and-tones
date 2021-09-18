import { createContext, useEffect, useState } from 'react';
import { cleanupHowls, createHowls } from '../../../assets/sound/howler';

export const HowlsContext = createContext();

const HowlsProvider = ({ children }) => {
  const [howls, setHowls] = useState([]);
  const [howlCbs, setHowlCbs] = useState([]);

  useEffect(() => {
    const { howlCbs, howls } = createHowls();
    setHowls(howls);
    setHowlCbs(howlCbs);

    return cleanupHowls;
  }, []);

  return (
    <HowlsContext.Provider value={{ howls, howlCbs }}>
      {children}
    </HowlsContext.Provider>
  );
};

export default HowlsProvider;
