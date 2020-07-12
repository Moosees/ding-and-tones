import { arrangementState } from '../song.initialState';
import actionTypes from '../song.types';
import { moveBar } from '../song.utils';

const arrangementReducer = (state = arrangementState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_BAR:
      return [...state, payload.barId];

    case actionTypes.CLEAR_SONG:
      return [];

    case actionTypes.DUPLICATE_BAR:
      return [...state, payload.newBarId];

    case actionTypes.DELETE_BAR:
      const arrFiltered = state.filter((bar) => bar !== payload);
      return arrFiltered;

    case actionTypes.LOAD_BARS:
      return state;

    case actionTypes.MOVE_BAR:
      const newArrangement = moveBar(
        state,
        payload.barIndex,
        payload.targetIndex
      );
      return newArrangement;

    default:
      return state;
  }
};

export default arrangementReducer;
