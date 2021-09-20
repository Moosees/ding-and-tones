import { createContext, useEffect, useState } from 'react';
import { cleanupHowls, createHowls } from '../../../assets/sound/howler';
import { connect } from 'react-redux';

export const HowlsContext = createContext();

const HowlsProvider = ({ children, allSoundOptions }) => {
  const [howls, setHowls] = useState({});

  useEffect(() => {
    const howls = createHowls(allSoundOptions);
    setHowls(howls);

    return cleanupHowls;
  }, [allSoundOptions]);

  return (
    <HowlsContext.Provider value={howls}>{children}</HowlsContext.Provider>
  );
};

const mapStateToProps = ({ ui }) => ({
  allSoundOptions: ui.soundOptions.allSounds,
});

export default connect(mapStateToProps)(HowlsProvider);
