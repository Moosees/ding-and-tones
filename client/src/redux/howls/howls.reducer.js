import howlsTypes from './howls.types';

const INITIAL_STATE = {};

const howlsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case howlsTypes.CLEANUP_HOWLS:
      return {};

    case howlsTypes.CREATE_HOWLS:
      return { ...state, ...payload.howls };

    default:
      return state;
  }
};

export default howlsReducer;
