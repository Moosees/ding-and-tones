import { filterObjectByKeyArray } from '../../store.utils';
import { beatsState } from '../song.initialState';
import songTypes from '../song.types';

const beatsReducer = (state = beatsState, { type, payload }) => {
  switch (type) {
    case songTypes.FETCH_SUCCESSFUL:
    case songTypes.SET_STATE:
      return payload.song.beats || state;

    case songTypes.UPDATE_MEASURE_AND_BEATS: {
      const newState = filterObjectByKeyArray(
        state,
        payload.song.deleteBeats,
        true
      );

      return { ...newState, ...payload.song.addBeats };
    }

    default:
      return state;
  }
};

export default beatsReducer;
