import { drumModes } from '../../assets/intervals';
import audioOptions from '../../assets/sound/audioOptions';
import scaleTypes from '../scale/scale.types';
import songTypes from '../song/song.types';
import drumTypes from './drum.types';

const INITIAL_STATE = {
  audioPath: audioOptions[0].path,
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
        displayedChord: payload.chord,
        displayedNote: payload.chord
          ? payload.chord.rootInScale
          : payload.rootIndex,
      };

    case drumTypes.SET_DISPLAYED_NOTE:
      return {
        ...state,
        displayedNote:
          state.displayedNote === payload.note
            ? payload.rootIndex
            : payload.note,
      };

    case drumTypes.SET_DRUM_MODE:
      return {
        ...state,
        drumMode: payload,
      };

    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        displayedChord: null,
        displayedNote: payload.newRoot.rootIndex,
      };

    case scaleTypes.NEW_SCALE:
      return { ...state, displayedChord: null, displayedNote: 0 };

    case songTypes.FETCH_SUCCESSFUL:
      if (!payload.getScale) return state;

      return {
        ...state,
        displayedChord: null,
        displayedNote: payload.scale.info.rootIndex,
      };

    default:
      return state;
  }
};

export default drumReducer;
