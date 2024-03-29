import songTypes from '../../song/song.types';
import { parsedState } from '../scale.initialState';
import scaleTypes from '../scale.types';
import { createFullScaleFromNames } from '../scale.utils';

const parsedReducer = (state = parsedState, { type, payload }) => {
  switch (type) {
    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        ...payload.parsed,
      };

    case scaleTypes.NEW_SCALE: {
      const newScale = createFullScaleFromNames(
        { dings: ['A3'], round: [], extra: [] },
        []
      );

      return {
        ...state,
        ...newScale,
        positions: [{ rotate: 0, translate: 0 }],
      };
    }

    case songTypes.FETCH_SUCCESSFUL:
      if (!payload.song.getScale) return state;

      return { ...state, ...payload.song.scale.parsed };

    default:
      return state;
  }
};

export default parsedReducer;
