import { arrangementState } from '../song.initialState';
import songTypes from '../song.types';
import { moveBar } from '../song.utils';

const arrangementReducer = (state = arrangementState, { type, payload }) => {
  switch (type) {
    case songTypes.ADD_NEW_BAR:
      return [...state, payload.barId];

    case songTypes.DUPLICATE_BAR:
      return [...state, payload.newBarId];

    case songTypes.DELETE_BAR:
      const arrFiltered = state.filter((bar) => bar !== payload.barToDelete);
      return arrFiltered;

    case songTypes.MOVE_BAR:
      const newArrangement = moveBar(
        state,
        payload.barIndex,
        payload.targetIndex
      );
      return newArrangement;

    case songTypes.FETCH_SUCCESSFUL:
    case songTypes.SET_STATE:
      return payload.arrangement || state;

    default:
      return state;
  }
};

export default arrangementReducer;
