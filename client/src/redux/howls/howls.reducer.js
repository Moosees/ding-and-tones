import audioOptions from '../../assets/sound/audioOptions';
import howlsTypes from './howls.types';

const INITIAL_STATE = {
  all: [],
  loadingStatus: {},
  optionCbs: {},
  info: {
    audioSrc: audioOptions[0],
    volume: 0.8,
  },
};

const newState = {
  data: {
    C3: {
      howl: null,
      play: null,
      status: 'ready',
    },
  },
  info: {
    audioSrc: audioOptions[0],
    volume: 0.8,
  },
};

const howlsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case howlsTypes.ADD_HOWL:
      return { ...state, data: { ...state.data, [payload]: payload } };

    case howlsTypes.CLEANUP_HOWLS:
      return { ...state, all: [], loadingStatus: {}, optionCbs: {} };

    case howlsTypes.CREATE_HOWLS:
      return { ...state, ...payload.howls };

    case howlsTypes.REMOVE_HOWL:
      return { ...state, data: { ...state.data, [payload]: null } };

    case howlsTypes.SELECT_AUDIO:
      return {
        ...state,
        info: { ...state.info, audioSrc: payload },
      };

    case howlsTypes.SET_VOLUME:
      return { ...state, info: { ...state.info, volume: payload.newVolume } };

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
