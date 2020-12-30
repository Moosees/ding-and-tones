import { drumModes } from '../../assets/intervals';
import { sound } from '../../assets/sound';
import scaleTypes from '../scale/scale.types';
import songTypes from '../song/song.types';
import drumTypes from './drum.types';

const INITIAL_STATE = {
  audioPath: sound[0].path,
  displayedChord: null,
  displayedNote: 0,
  drumMode: drumModes.NOTES,
};

const drumReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case drumTypes.SELECT_AUDIO:
      return {
        ...state,
        audioPath: payload,
      };

    case drumTypes.SET_DISPLAYED_CHORD:
      return {
        ...state,
        displayedChord: payload,
        displayedNote: payload ? payload.rootInScale : 0,
      };

    case drumTypes.SET_DISPLAYED_NOTE:
      return {
        ...state,
        displayedNote: state.displayedNote === payload ? 0 : payload,
      };

    case drumTypes.SET_DRUM_MODE:
      return {
        ...state,
        drumMode: payload,
      };

    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
    case scaleTypes.UPDATE_SCALE:
    case songTypes.FETCH_SUCCESSFUL:
      return {
        ...state,
        displayedChord: null,
        displayedNote: 0,
      };

    default:
      return state;
  }
};

export default drumReducer;
