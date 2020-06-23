import { combineReducers } from 'redux';
import barsReducer from './bars/bars.reducer';
import chordsReducer from './chords/chords.reducer';
import drumReducer from './drum/drum.reducer';
import scaleReducer from './scale/scale.reducer';
import songReducer from './song/song.reducer';
import uiReducer from './ui/ui.reducer';

const rootReducer = combineReducers({
  bars: barsReducer,
  chords: chordsReducer,
  drum: drumReducer,
  scale: scaleReducer,
  song: songReducer,
  ui: uiReducer,
});

export default rootReducer;
