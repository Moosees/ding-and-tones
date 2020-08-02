import { noteNameToValue } from '../../../assets/intervals';
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
        label: createScaleLabel(payload),
        rootName: payload[0].slice(0, -1),
        rootValue: noteNameToValue[payload[0]],
      };

    default:
      return state;
  }
};

export default infoReducer;
