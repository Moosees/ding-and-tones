import songTypes from '../../song/song.types';
import { parsedState } from '../scale.initialState';
import scaleTypes from '../scale.types';
import { createFullScaleFromNames } from '../scale.utils';

const parsedReducer = (state = parsedState, { type, payload }) => {
  switch (type) {
    //case scaleTypes.SAVE_SUCCESSFUL:
    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        ...payload.parsed,
      };

    case scaleTypes.NEW_SCALE: {
      const { newIntervals, newPitched } = createFullScaleFromNames(['A3'], []);

      return {
        ...state,
        intervals: newIntervals,
        pitched: newPitched,
        positions: [{ rotate: 0, translate: 0 }],
      };
    }

    case songTypes.FETCH_SUCCESSFUL:
      if (!payload.getScale) return state;

      return { ...state, ...payload.scale.parsed };

    case scaleTypes.MOVE_EXTRA_NOTES:
      return state; // position is in parsed scale?

    default:
      return state;
  }
};

export default parsedReducer;
