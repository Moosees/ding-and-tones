import { v4 as uuid } from 'uuid';
import actionTypes from './song.types';

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

    case actionTypes.COPY_BAR_TO_END:
      const arrangementWithEndCopy = [
        ...state.arrangement,
        { barId: payload, arrangementId: uuid() },
      ];
      return { ...state, arrangement: arrangementWithEndCopy };

    case actionTypes.COPY_BAR_TO_NEXT:
      const previousIndex = state.arrangement.findIndex(
        (bar) => bar.arrangementId === payload.previousId
      );

      const arrangementWithNextCopy = [
        ...state.arrangement.slice(0, previousIndex + 1),
        {
          barId: payload.barId,
          arrangementId: uuid(),
        },
        ...state.arrangement.slice(previousIndex + 1),
      ];

      return {
        ...state,
        arrangement: arrangementWithNextCopy,
      };

    case actionTypes.DELETE_BAR_FROM_SONG:
      const updatedBars = state.arrangement.filter(
        (bar) => bar.arrangementId !== payload
      );
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
