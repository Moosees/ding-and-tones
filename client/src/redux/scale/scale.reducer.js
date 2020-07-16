import { combineReducers } from 'redux';
import infoReducer from './reducers/info';
import notesReducer from './reducers/notes';
import uiReducer from './reducers/ui';

const scaleReducer = combineReducers({
  info: infoReducer,
  notes: notesReducer,
  ui: uiReducer,
});

export default scaleReducer;
