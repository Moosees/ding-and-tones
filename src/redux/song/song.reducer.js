import SongActionTypes from './song.types';

const INITIAL_STATE = {
  bpm: 90
};

const songReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SongActionTypes.SET_BPM:
      return {
        ...state,
        bpm: action.payload
      };

    default:
      return state;
  }
};

export default songReducer;
