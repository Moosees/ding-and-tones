import { combineReducers } from 'redux';
import {
  arrangementState,
  barsDataState,
  beatsState,
} from './bars.initialState';
import actionTypes from './bars.types';
import { copyBarToEnd, copyBeats } from './bars.utils';

const arrangementReducer = (state = arrangementState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_BAR:
      return [...state, payload.barId];

    case actionTypes.COPY_BAR_TO_END:
      return [...state, payload.newBarId];

    case actionTypes.DELETE_BAR:
      const arrFiltered = state.filter((bar) => bar !== payload);
      return arrFiltered;

    default:
      return state;
  }
};

const barsDataReducer = (state = barsDataState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_BAR:
      return { ...state, [payload.barId]: payload.barData };

    case actionTypes.COPY_BAR_TO_END:
      const barCopy = copyBarToEnd(payload.oldBarId, state);
      return { ...state, [payload.newBarId]: barCopy };

    case actionTypes.DELETE_BAR:
      return { ...state };

    case actionTypes.SET_BAR_SUBDIVISION:
      return {
        ...state,
        [payload.barId]: {
          ...state[payload.barId],
          subdivision: payload.newSubdivision,
        },
      };

    default:
      return state;
  }
};

const beatsReducer = (state = beatsState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_BAR:
      return { ...state, ...payload.beats };

    case actionTypes.COPY_BAR_TO_END:
      const newBeats = copyBeats(payload.oldBarId, state);
      return { ...state, ...newBeats };

    case actionTypes.DELETE_BAR:
      return { ...state };

    case actionTypes.UPDATE_BEAT:
      return {
        ...state,
        [payload.beatId]: { ...state[payload.beatId], sound: payload.newSound },
      };

    default:
      return state;
  }
};

export default combineReducers({
  arrangement: arrangementReducer,
  bars: barsDataReducer,
  beats: beatsReducer,
});
