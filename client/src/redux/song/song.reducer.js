import { combineReducers } from 'redux';
import arrangementReducer from './reducers/arrangement';
import barsReducer from './reducers/bars';
import beatsReducer from './reducers/beats';
import infoReducer from './reducers/info';

const songReducer = combineReducers({
  arrangement: arrangementReducer,
  bars: barsReducer,
  beats: beatsReducer,
  info: infoReducer,
});

export default songReducer;
