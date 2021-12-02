import howlsTypes from './howls.types';

const INITIAL_STATE = {
  all: [],
  loadingStatus: {},
  optionCbs: {},
  volume: 0.8,
};

const howlsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case howlsTypes.ADD_HOWL:
      console.log({ payload });
      return state;

    case howlsTypes.CLEANUP_HOWLS:
      return { ...state, all: [], loadingStatus: {}, optionCbs: {} };

    case howlsTypes.CREATE_HOWLS:
      return { ...state, ...payload.howls };

    case howlsTypes.REMOVE_HOWL:
      console.log({ payload });
      return state;

    case howlsTypes.SET_VOLUME:
      return { ...state, volume: payload.newVolume };

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
