import { noteNameToValue } from '../../../assets/intervals';
import songTypes from '../../song/song.types';
import { infoState } from '../scale.initialState';
import scaleTypes from '../scale.types';
import { createScaleLabel } from '../scale.utils';

const infoReducer = (state = infoState, { type, payload }) => {
  switch (type) {
    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.SAVE_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
      return {
        ...state,
        ...payload.info,
      };

    case scaleTypes.SET_NAME:
      return {
        ...state,
        name: payload,
      };

    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        label: createScaleLabel(payload.newExtra, payload.newRound),
        rootName: payload.newRound[0] ? payload.newRound[0].slice(0, -1) : '',
        rootValue: payload.newRound[0]
          ? noteNameToValue[payload.newRound[0]]
          : -1,
      };

    case songTypes.FETCH_SUCCESSFUL:
      if (!payload.getScale) return state;

      return {
        ...state,
        ...payload.scale.info,
      };

    default:
      return state;
  }
};

export default infoReducer;
