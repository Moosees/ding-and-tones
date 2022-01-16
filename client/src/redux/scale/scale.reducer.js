import { combineReducers } from 'redux';
import infoReducer from './reducers/info';
import notesReducer from './reducers/notes';
import parsedReducer from './reducers/parsed';
import uiReducer from './reducers/ui';

const scaleReducer = combineReducers({
  info: infoReducer,
  notes: notesReducer,
  parsed: parsedReducer,
  ui: uiReducer,
});

export default scaleReducer;
