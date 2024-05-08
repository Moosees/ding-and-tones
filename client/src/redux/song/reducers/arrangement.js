import { arrangementState } from '../song.initialState';
import songTypes from '../song.types';

const arrangementReducer = (state = arrangementState, { type, payload }) => {
  switch (type) {
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
