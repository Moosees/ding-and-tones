import { Howler } from 'howler';
import { audioSources } from '../../assets/sound/audioOptions';
import scaleTypes from '../scale/scale.types';
import songTypes from '../song/song.types';
import userTypes from '../user/user.types';
import howlsTypes from './howls.types';
import { changeAudioSrc, updateHowls } from './howls.utils';

const INITIAL_STATE = {
  data: {},
  info: {
    audioSrc: audioSources[0],
    volume: 0.8,
  },
  isSaving: false,
};

const howlsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case howlsTypes.CREATE_HOWLS:
      return { ...state, data: payload.howls };

    case howlsTypes.SAVE_STARTED:
      return { ...state, isSaving: true };
    case howlsTypes.SAVE_ERROR:
    case howlsTypes.SAVE_SUCCESSFUL:
      return { ...state, isSaving: false };

    case howlsTypes.SELECT_AUDIO: {
      if (state.info.audioSrc.path === payload.audioSrc.path) {
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

    case howlsTypes.SET_VOLUME: {
      Howler.volume(payload.newVolume);

      return { ...state, info: { ...state.info, volume: payload.newVolume } };
    }

    case howlsTypes.UPDATE_HOWL_LOADING_STATUS: {
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
    case scaleTypes.UPDATE_SCALE: {
      const newHowls = updateHowls(
        state.data,
        state.info.audioSrc.path,
        payload.parsed.pitched
      );

      return { ...state, data: newHowls };
    }

    case songTypes.FETCH_SUCCESSFUL: {
      if (!payload.getScale) return state;

      const newHowls = updateHowls(
        state.data,
        state.info.audioSrc.path,
        payload.scale.parsed.pitched
      );

      return { ...state, data: newHowls };
    }

    case userTypes.SIGN_IN: {
      return { ...state, ...payload.howls };
    }

    default:
      return state;
  }
};

export default howlsReducer;
