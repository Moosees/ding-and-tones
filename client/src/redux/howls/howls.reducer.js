import audioOptions from '../../assets/sound/audioOptions';
import scaleTypes from '../scale/scale.types';
import howlsTypes from './howls.types';
import { createHowl } from './howls.utils';

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

    case howlsTypes.CLEANUP_HOWLS:
      return { ...state, data: {} };

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
      const note = { ...state.data[payload.note] };
      note.status = payload.status;

      return {
        ...state,
        data: {
          ...state.data,
          [payload.note]: { ...note },
        },
      };
    }

    case scaleTypes.LOAD_SCALE:
      console.log('load scale:', payload.parsed.pitched);
      const newHowls = payload.parsed.pitched.reduce((acc, { note }) => {
        console.log('New howl?', note, !state.data[note], state.data[note]);
        acc[note] = state.data[note]
          ? { ...state.data[note] }
          : {
              ...createHowl(note, `${state.info.audioSrc.path}/${note}.mp3`),
              status: 'loading',
            };

        return acc;
      }, {});

      console.log({ newHowls });

      return { ...state, data: newHowls };

    default:
      return state;
  }
};

export default howlsReducer;
