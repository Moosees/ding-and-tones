import drumTypes from './drum.types';

const INITIAL_STATE = {
  displayedChord: null,
  displayedNote: 0,
  showIntervals: false,
};

const drumReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case drumTypes.FLUSH_DRUM_STATE:
      return {
        ...state,
        displayedChord: null,
        displayedNote: 0,
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

    default:
      return state;
  }
};

export default drumReducer;
