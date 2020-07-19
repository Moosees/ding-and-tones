import { combineReducers } from 'redux';
import arrangementReducer from './reducers/arrangement';
import barsReducer from './reducers/bars';
import beatsReducer from './reducers/beats';
import infoReducer from './reducers/info';
import uiReducer from './reducers/ui';

const songReducer = combineReducers({
  arrangement: arrangementReducer,
  bars: barsReducer,
  beats: beatsReducer,
  info: infoReducer,
  ui: uiReducer,
});

export default songReducer;
