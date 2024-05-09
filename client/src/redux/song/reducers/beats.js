import { beatsState } from '../song.initialState';
import songTypes from '../song.types';

const beatsReducer = (state = beatsState, { type, payload }) => {
  switch (type) {
    case songTypes.FETCH_SUCCESSFUL:
    case songTypes.SET_STATE:
      return payload.song.beats || state;

    default:
      return state;
  }
};

export default beatsReducer;
