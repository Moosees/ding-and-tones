import { Howler } from 'howler';
import { defaultScale } from '../../assets/defaultData';
import { audioSources } from '../../assets/sound/audioOptions';
import { parseScaleData } from '../scale/scale.utils';
import howlsTypes from './howls.types';
import { changeAudioSrc, updateHowls } from './howls.utils';

const { parsed } = parseScaleData(defaultScale);

const defaultHowlsStatus = updateHowls(
  {},
  audioSources[0].path,
  parsed.pitched,
);

const INITIAL_STATE = {
  audioSrc: audioSources[0],
  isSaving: false,
  status: defaultHowlsStatus,
};

const howlsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case howlsTypes.SELECT_AUDIO: {
      if (state.audioSrc.option === payload.audioSrc.option) {
        return state;
      }

      console.log(type, payload);
      const status = changeAudioSrc(payload.audioSrc.path, payload.scale);
      console.log({ status });

      return {
        ...state,
        status,
        audioSrc: payload.audioSrc,
      };
    }

    case howlsTypes.SET_VOLUME: {
      Howler.volume(payload.newVolume);

      return { ...state, volume: payload.newVolume };
    }

    case howlsTypes.UPDATE_HOWL_LOADING_STATUS: {
      console.log(type, { payload });
      if (!state.status[payload.note]) return state;

      const status = { ...state.status };
      status[payload.note] = payload.status;

      return { ...state, status };
    }

    // case scaleTypes.NEW_SCALE: {
    //   console.log(type);
    //   const status = updateHowls(state.status, state.audioSrc.path, [
    //     { note: 'A3' },
    //   ]);
    //   console.log({ status });
    //
    //   return { ...state, status };
    // }
    //
    // case scaleTypes.FETCH_SUCCESSFUL:
    // case scaleTypes.LOAD_SCALE:
    // case scaleTypes.UPDATE_SCALE: {
    //   console.log(type, payload.parsed.pitched);
    //   const status = updateHowls(
    //     state.status,
    //     state.audioSrc.path,
    //     payload.parsed.pitched
    //   );
    //   console.log({ status });
    //
    //   return { ...state, status };
    // }
    //
    // case songTypes.FETCH_SUCCESSFUL: {
    //   if (!payload.song.getScale) return state;
    //   console.log(type, payload.song.scale.parsed.pitched);
    //
    //   const status = updateHowls(
    //     state.status,
    //     state.audioSrc.path,
    //     payload.song.scale.parsed.pitched
    //   );
    //   console.log({ status });
    //
    //   return { ...state, status };
    // }

    default:
      return state;
  }
};

export default howlsReducer;
