import howlsTypes from './howls.types';
import { cleanupHowls, createHowls } from './howls.utils';

export const cleanupAllHowls = () => (dispatch) => {
  cleanupHowls();

  dispatch({ type: howlsTypes.CLEANUP_HOWLS });
};

export const createAllHowls = (soundOptions) => (dispatch) => {
  const howls = createHowls(soundOptions);

  dispatch({ type: howlsTypes.CREATE_HOWLS, payload: { howls } });
  return howls;
};
