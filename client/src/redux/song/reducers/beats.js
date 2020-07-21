import { beatsState } from '../song.initialState';
import songTypes from '../song.types';

const beatsReducer = (state = beatsState, { type, payload }) => {
  switch (type) {
    case songTypes.ADD_NEW_BAR:
      return { ...state, ...payload.beats };

    case songTypes.DUPLICATE_BAR:
      return { ...state, ...payload.newBeats };

    case songTypes.FETCH_SUCCESSFUL:
    case songTypes.SET_STATE:
      return payload.beats || state;

    case songTypes.UPDATE_BEAT:
      return {
        ...state,
        [payload.beatId]: {
          ...state[payload.beatId],
          sound: payload.newSound,
        },
      };

    case songTypes.UPDATE_MEASURE:
      return {
        ...state,
        ...payload.newBeats,
      };

    default:
      return state;
  }
};

export default beatsReducer;
