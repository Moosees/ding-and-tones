import { combineReducers } from 'redux';
import alertReducer from './alert/alert.reducer';
import chordsReducer from './chords/chords.reducer';
import drumReducer from './drum/drum.reducer';
import howlsReducer from './howls/howls.reducer';
import scaleReducer from './scale/scale.reducer';
import searchReducer from './search/search.reducer';
import songReducer from './song/song.reducer';
import uiReducer from './ui/ui.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  alert: alertReducer,
  chords: chordsReducer,
  drum: drumReducer,
  howls: howlsReducer,
  scale: scaleReducer,
  search: searchReducer,
  song: songReducer,
  ui: uiReducer,
  user: userReducer,
});

export default rootReducer;
