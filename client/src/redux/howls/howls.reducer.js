import audioOptions from '../../assets/sound/audioOptions';
import scaleTypes from '../scale/scale.types';
import songTypes from '../song/song.types';
import howlsTypes from './howls.types';
import { changeAudioSrc, updateHowls } from './howls.utils';

const INITIAL_STATE = {
  data: {},
  info: {
    audioSrc: audioOptions[0],
    volume: 0.8,
  },
};

const howlsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case howlsTypes.CREATE_HOWLS:
      return { ...state, data: payload.howls };

    case howlsTypes.SELECT_AUDIO: {
      console.log({
        oldSrc: state.info.audioSrc,
        newSrc: payload.audioSrc,
      });
      if (state.info.audioSrc.path === payload.audioSrc.path) {
        console.log('skipping audioSrc update');
        return state;
      }

      const newHowls = changeAudioSrc(
        state.data,
        payload.audioSrc.path,
        payload.scale
      );

      return {
        ...state,
        data: newHowls,
        info: { ...state.info, audioSrc: payload.audioSrc },
      };
    }

    case howlsTypes.SET_VOLUME:
      return { ...state, info: { ...state.info, volume: payload.newVolume } };

    case howlsTypes.UPDATE_HOWL_LOADING_STATUS: {
      console.log('howl status change', {
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
    case scaleTypes.UPDATE_SCALE:
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
