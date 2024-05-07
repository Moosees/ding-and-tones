import { filterObjectByKeyArray } from '../../store.utils';
import { beatsState } from '../song.initialState';
import songTypes from '../song.types';
import { addSoundToBeat, removeSoundFromBeat } from '../song.utils';

const beatsReducer = (state = beatsState, { type, payload }) => {
  switch (type) {
    case songTypes.DELETE_BAR:
      return filterObjectByKeyArray(state, payload.song.beatsToDelete, true);

    case songTypes.DUPLICATE_BAR:
      return { ...state, ...payload.song.newBeats };

    case songTypes.FETCH_SUCCESSFUL:
    case songTypes.SET_STATE:
      return payload.song.beats || state;

    case songTypes.UPDATE_BEAT:
      return {
        ...state,
        [payload.beatId]: {
          ...state[payload.beatId],
          sound: payload.selected
            ? removeSoundFromBeat(payload.newSound, state[payload.beatId].sound)
            : addSoundToBeat(
                payload.newSound,
                state[payload.beatId].sound,
                payload.multiSelect
              ),
        },
      };

    case songTypes.UPDATE_HAND:
      return {
        ...state,
        [payload.beatId]: {
          ...state[payload.beatId],
          hand: payload.selected ? undefined : payload.newHand,
        },
      };

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
