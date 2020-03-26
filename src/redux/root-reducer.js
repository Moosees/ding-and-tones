import { combineReducers } from 'redux';
import songReducer from './song/song.reducer';

const rootReducer = combineReducers({
  song: songReducer
});

export default rootReducer;
