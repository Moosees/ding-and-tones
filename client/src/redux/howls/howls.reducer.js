import { Howler } from 'howler';
import { audioSources } from '../../assets/sound/audioOptions';
import scaleTypes from '../scale/scale.types';
import songTypes from '../song/song.types';
import userTypes from '../user/user.types';
import howlsTypes from './howls.types';
import { changeAudioSrc, updateHowls } from './howls.utils';

const INITIAL_STATE = {
  status: {},
  info: {
    audioSrc: audioSources[0],
    volume: 0.8,
  },
  isSaving: false,
};

const howlsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case howlsTypes.SAVE_STARTED:
      return { ...state, isSaving: true };
    case howlsTypes.SAVE_ERROR:
    case howlsTypes.SAVE_SUCCESSFUL:
      return { ...state, isSaving: false };

    case howlsTypes.SELECT_AUDIO: {
      if (state.info.audioSrc.path === payload.audioSrc.path) {
        return state;
      }

      console.log(type, payload);
      const status = changeAudioSrc(payload.audioSrc.path, payload.scale);
      console.log({ status });

      return {
        ...state,
        status,
        info: { ...state.info, audioSrc: payload.audioSrc },
      };
    }

    case howlsTypes.SET_VOLUME: {
      Howler.volume(payload.newVolume);

      return { ...state, info: { ...state.info, volume: payload.newVolume } };
    }

    case howlsTypes.UPDATE_HOWL_LOADING_STATUS: {
      console.log(type, { payload });
      if (!state.status[payload.note]) return state;

      const status = { ...state.status };
      status[payload.note] = payload.status;

      return { ...state, status };
    }

    case scaleTypes.NEW_SCALE: {
      console.log(type);
      const status = updateHowls(state.status, state.info.audioSrc.path, [
        { note: 'A3' },
      ]);
      console.log({ status });

      return { ...state, status };
    }

    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
    case scaleTypes.UPDATE_SCALE: {
      console.log(type, payload.parsed.pitched);
      const status = updateHowls(
        state.status,
        state.info.audioSrc.path,
        payload.parsed.pitched
      );
      console.log({ status });

      return { ...state, status };
    }

    case songTypes.FETCH_SUCCESSFUL: {
      if (!payload.song.getScale) return state;
      console.log(type, payload.song.scale.parsed.pitched);

      const status = updateHowls(
        state.status,
        state.info.audioSrc.path,
        payload.song.scale.parsed.pitched
      );
      console.log({ status });

      return { ...state, status };
    }

    case userTypes.SIGN_IN: {
      console.log(type, payload.howls);
      // return { ...state, ...payload.howls };
      return state;
    }

    default:
      return state;
  }
};

export default howlsReducer;
