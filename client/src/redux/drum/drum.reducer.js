import { sound } from '../../assets/sound';
import scaleTypes from '../scale/scale.types';
import drumTypes from './drum.types';

const INITIAL_STATE = {
  audioPath: sound[0].path,
  displayedChord: null,
  displayedNote: 0,
  showIntervals: false,
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

    case drumTypes.SET_SHOW_INTERVALS:
      return {
        ...state,
        showIntervals: payload,
        displayedNote:
          payload || state.displayedChord ? state.displayedNote : 0,
      };

    case scaleTypes.UPDATE_SCALE:
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
