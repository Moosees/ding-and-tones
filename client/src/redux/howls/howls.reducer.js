import howlsTypes from './howls.types';

const INITIAL_STATE = {
  all: [],
  loadingStatus: {},
  optionCbs: {},
};

const howlsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case howlsTypes.CLEANUP_HOWLS:
      return INITIAL_STATE;

    case howlsTypes.CREATE_HOWLS:
      return { ...state, ...payload.howls };

    case howlsTypes.UPDATE_HOWL_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: {
          ...state.loadingStatus,
          [payload.option]: payload.status,
        },
      };

    default:
      return state;
  }
};

export default howlsReducer;
