import { combineReducers } from 'redux';
import chordsReducer from './chords/chords.reducer';
import scaleReducer from './scale/scale.reducer';
import songReducer from './song/song.reducer';

const rootReducer = combineReducers({
  chords: chordsReducer,
  scale: scaleReducer,
  song: songReducer
});

export default rootReducer;
