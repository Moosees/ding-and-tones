import { combineReducers } from 'redux';
import scaleReducer from './scale/scale.reducer';
import songReducer from './song/song.reducer';

const rootReducer = combineReducers({
  scale: scaleReducer,
  song: songReducer
});

export default rootReducer;
