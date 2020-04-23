import actionTypes from './song.types';
import {
  copyToEndOfArrangement,
  copyToNextInArrangement,
  deleteFromArrangement,
  updateBarInArrangement,
} from './song.utils';

const INITIAL_STATE = {
  name: 'This is a song',
  arrangement: [
    { barId: 'bar_a', arrangementId: 'bar_1' },
    { barId: 'bar_a', arrangementId: 'bar_2' },
  ],
  bpm: 100,
  metre: 's44',
  subdivision: 4,
};

const songReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_BAR_TO_SONG:
      return {
        ...state,
        arrangement: [...state.arrangement, payload],
      };

    case actionTypes.CHANGE_BAR_IN_PLACE:
      const updatedArrangement = updateBarInArrangement(
        payload.arrangementId,
        payload.newBarId,
        state.arrangement
      );

      return { ...state, arrangement: updatedArrangement };

    case actionTypes.COPY_BAR_TO_END:
      const arrangementWithEndCopy = copyToEndOfArrangement(
        payload,
        state.arrangement
      );
      return { ...state, arrangement: arrangementWithEndCopy };

    case actionTypes.COPY_BAR_TO_NEXT:
      const arrangementWithNextCopy = copyToNextInArrangement(
        payload.barId,
        payload.previousId,
        state.arrangement
      );

      return {
        ...state,
        arrangement: arrangementWithNextCopy,
      };

    case actionTypes.DELETE_BAR_FROM_SONG:
      const updatedBars = deleteFromArrangement(payload, state.arrangement);

      return { ...state, arrangement: updatedBars };

    case actionTypes.SET_BPM:
      return {
        ...state,
        bpm: payload,
      };

    case actionTypes.SET_SONG_METRE:
      return {
        ...state,
        metre: payload,
      };

    case actionTypes.SET_SONG_SUBDIVISION:
      return {
        ...state,
        subdivision: payload,
      };

    default:
      return state;
  }
};

export default songReducer;
