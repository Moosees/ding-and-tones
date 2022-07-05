import audioOptions from '../../assets/sound/audioOptions';
import scaleTypes from '../scale/scale.types';
import songTypes from '../song/song.types';
import howlsTypes from './howls.types';
import { updateHowls } from './howls.utils';

// const oldState = {
//   all: [],
//   loadingStatus: {},
//   optionCbs: {},
//   info: {
//     audioSrc: audioOptions[0],
//     volume: 0.8,
//   },
// };

const INITIAL_STATE = {
  data: {},
  info: {
    audioSrc: audioOptions[0],
    volume: 0.8,
  },
};

const howlsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case howlsTypes.ADD_HOWL:
      return { ...state, data: { ...state.data, [payload]: payload } };

    case howlsTypes.CREATE_HOWLS:
      return { ...state, data: payload.howls };

    case howlsTypes.REMOVE_HOWL:
      return { ...state, data: { ...state.data, [payload]: null } };

    case howlsTypes.SELECT_AUDIO:
      return {
        ...state,
        info: { ...state.info, audioSrc: payload },
      };

    case howlsTypes.SET_VOLUME:
      return { ...state, info: { ...state.info, volume: payload.newVolume } };

    case howlsTypes.UPDATE_HOWL_LOADING_STATUS: {
      console.log({
        howl: payload.howl,
        oldStatus: state.data[payload.howl].status,
        newStatus: payload.status,
        state: state.data,
      });
      if (!state.data[payload.howl]) return state;

      const howl = { ...state.data[payload.howl] };
      howl.status = payload.status;

      return {
        ...state,
        data: {
          ...state.data,
          [payload.howl]: { ...howl },
        },
      };
    }

    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
    case scaleTypes.SAVE_SUCCESSFUL: {
      console.log(type, payload);

      const newHowls = updateHowls(
        state.data,
        state.info.audioSrc.path,
        payload.parsed.pitched
      );

      console.log({ newHowls });

      return { ...state, data: newHowls };
    }

    case songTypes.FETCH_SUCCESSFUL: {
      console.log(type, payload);

      if (!payload.getScale) return state;

      const newHowls = updateHowls(
        state.data,
        state.info.audioSrc.path,
        payload.scale.parsed.pitched
      );

      console.log({ newHowls });

      return { ...state, data: newHowls };
    }

    default:
      return state;
  }
};

export default howlsReducer;
