import { combineReducers } from 'redux';
import {
  arrangementState,
  barsDataState,
  beatsState,
} from './bars.initialState';
import actionTypes from './bars.types';
import { moveBar } from './bars.utils';

const arrangementReducer = (state = arrangementState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_BAR:
      return [...state, payload.barId];

    case actionTypes.CLEAR_SONG:
      return [];

    case actionTypes.DUPLICATE_BAR:
      return [...state, payload.newBarId];

    case actionTypes.DELETE_BAR:
      const arrFiltered = state.filter((bar) => bar !== payload);
      return arrFiltered;

    case actionTypes.MOVE_BAR:
      const newArrangement = moveBar(
        state,
        payload.barIndex,
        payload.targetIndex
      );
      return newArrangement;

    default:
      return state;
  }
};

const barsDataReducer = (state = barsDataState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_BAR:
      return { ...state, [payload.barId]: payload.barData };

    case actionTypes.DUPLICATE_BAR:
      const oldBar = state[payload.oldBarId];
      return {
        ...state,
        [payload.newBarId]: { ...oldBar, measure: payload.newMeasure },
      };

    case actionTypes.DELETE_BAR:
      return state;

    case actionTypes.SET_BAR_SUBDIVISION:
      return {
        ...state,
        [payload.barId]: {
          ...state[payload.barId],
          subdivision: payload.newSubdivision,
        },
      };

    case actionTypes.UPDATE_MEASURE_AND_BEATS:
      return {
        ...state,
        [payload.barId]: {
          ...state[payload.barId],
          measure: payload.newMeasure,
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

    case actionTypes.DUPLICATE_BAR:
      return { ...state, ...payload.newBeats };

    case actionTypes.DELETE_BAR:
      return state;

    case actionTypes.UPDATE_BEAT:
      return {
        ...state,
        [payload.beatId]: {
          ...state[payload.beatId],
          sound: payload.newSound,
        },
      };

    case actionTypes.UPDATE_MEASURE_AND_BEATS:
      return {
        ...state,
        ...payload.newBeats,
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