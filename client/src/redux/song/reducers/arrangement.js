import { arrangementState } from '../song.initialState';
import songTypes from '../song.types';

const arrangementReducer = (state = arrangementState, { type, payload }) => {
  switch (type) {
    case songTypes.ADD_NEW_BAR:
      return [...state, payload.song.barId];

    case songTypes.DUPLICATE_BAR:
      return [...state, payload.song.newBarId];

    case songTypes.DELETE_BAR:
      const arrFiltered = state.filter(
        (bar) => bar !== payload.song.barToDelete
      );
      return arrFiltered;

    case songTypes.MOVE_BAR:
      return payload.song.newArrangement || state;

    case songTypes.FETCH_SUCCESSFUL:
    case songTypes.SET_STATE:
      return payload.song.arrangement || state;

    default:
      return state;
  }
};

export default arrangementReducer;
