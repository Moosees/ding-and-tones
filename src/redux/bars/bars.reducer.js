import INITIAL_STATE from './bars.initialState';
import actionTypes from './bars.types';
import { copyBarToEnd, updateBeat } from './bars.utils';

const barsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_BAR:
      return [...state, payload];

    case actionTypes.COPY_BAR_TO_END:
      const barCopy = copyBarToEnd(payload, state);
      return [...state, barCopy];

    case actionTypes.DELETE_BAR:
      const barDeleteCopy = state.filter((bar) => bar.barId !== payload);

      return barDeleteCopy;

    case actionTypes.SET_BAR_METRE:
      const barMetreCopy = state.map((bar) =>
        bar.barId === payload.barId
          ? {
              ...bar,
              metre: payload.newMetre,
              lengthInBeats: payload.newLengthInBeats,
            }
          : bar
      );

      return barMetreCopy;

    case actionTypes.SET_BAR_SUBDIVISION:
      const barSubdivisionCopy = state.map((bar) =>
        bar.barId === payload.barId
          ? {
              ...bar,
              subdivision: payload.newSubdivision,
            }
          : bar
      );

      return barSubdivisionCopy;

    case actionTypes.UPDATE_BEAT:
      const barBeatCopy = updateBeat(payload, state);

      return barBeatCopy;

    default:
      return state;
  }
};

export default barsReducer;
