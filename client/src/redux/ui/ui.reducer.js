import uiTypes from './ui.types';

const INITIAL_STATE = {
  mutedBars: {},
};

const uiReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case uiTypes.SET_MUTED_BARS:
      return {
        ...state,
        mutedBars: payload.mutedBars,
      };

    default:
      return state;
  }
};

export default uiReducer;
