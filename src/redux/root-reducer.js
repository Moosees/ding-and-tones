import { combineReducers } from 'redux';
import barsReducer from './bars/bars.reducer';
import chordsReducer from './chords/chords.reducer';
import scaleReducer from './scale/scale.reducer';
import songReducer from './song/song.reducer';

const rootReducer = combineReducers({
  bars: barsReducer,
  chords: chordsReducer,
  scale: scaleReducer,
  song: songReducer,
});

export default rootReducer;
