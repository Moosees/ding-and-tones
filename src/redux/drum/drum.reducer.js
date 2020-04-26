import actionTypes from './drum.types';

const INITIAL_STATE = {
  displayedChord: null,
  displayedNote: 0,
  isEditing: false,
  showIntervals: false,
};

const drumReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_DISPLAYED_CHORD:
      return {
        ...state,
        displayedChord: state.displayedChord === payload ? null : payload,
      };

    case actionTypes.SET_DISPLAYED_NOTE:
      return {
        ...state,
        displayedNote: state.displayedNote === payload ? 0 : payload,
      };

    case actionTypes.TOGGLE_IS_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing,
        showIntervals: false,
      };

    case actionTypes.TOGGLE_SHOW_INTERVALS:
      return {
        ...state,
        showIntervals: !state.showIntervals,
        displayedNote: state.showIntervals ? 0 : state.displayedNote,
      };

    default:
      return state;
  }
};

export default drumReducer;
