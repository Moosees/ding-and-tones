import { createContext, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  cleanupAllHowls,
  createAllHowls,
} from '../../../redux/howls/howls.actions';

export const HowlsContext = createContext();

const HowlsProvider = ({ children, allSoundOptions }) => {
  const [howls, setHowls] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const howls = dispatch(createAllHowls(allSoundOptions));
    setHowls(howls);

    return () => dispatch(cleanupAllHowls());
  }, [allSoundOptions, dispatch]);

  return (
    <HowlsContext.Provider value={howls}>{children}</HowlsContext.Provider>
  );
};

const mapStateToProps = ({ ui }) => ({
  allSoundOptions: ui.soundOptions.allSounds,
});

export default connect(mapStateToProps)(HowlsProvider);
