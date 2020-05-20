import actionTypes from './drum.types';

const INITIAL_STATE = {
  displayedChord: null,
  displayedNote: 0,
  showIntervals: false,
};

const drumReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_DISPLAYED_CHORD:
      return {
        ...state,
        displayedChord: state.displayedChord === payload ? null : payload,
        showIntervals: false,
      };

    case actionTypes.SET_DISPLAYED_NOTE:
      return {
        ...state,
        displayedNote: state.displayedNote === payload ? 0 : payload,
      };

    case actionTypes.TOGGLE_SHOW_INTERVALS:
      return {
        ...state,
        showIntervals: payload,
        displayedNote: payload ? state.displayedNote : 0,
      };

    default:
      return state;
  }
};

export default drumReducer;
