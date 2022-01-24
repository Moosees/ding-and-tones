import songTypes from '../../song/song.types';
import { infoState } from '../scale.initialState';
import scaleTypes from '../scale.types';

const infoReducer = (state = infoState, { type, payload }) => {
  switch (type) {
    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.SAVE_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
      return {
        ...state,
        ...payload.info,
      };

    case scaleTypes.NEW_SCALE:
      return {
        ...state,
        label: '(A3)',
        layout: 1,
        name: 'New Scale',
        rootIndex: 0,
        rootValue: 45,
        rootName: 'A',
      };

    case scaleTypes.SET_NAME:
      return {
        ...state,
        name: payload,
      };

    case scaleTypes.TOGGLE_SHARPS:
      return {
        ...state,
        ...payload,
      };

    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        ...payload.info,
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
