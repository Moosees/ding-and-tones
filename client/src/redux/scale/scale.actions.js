import axios from 'axios';
import scaleTypes from './scale.types';

export const addNoteToScale = (newNote) => ({
  type: scaleTypes.ADD_NOTE,
  payload: newNote,
});

export const getScaleById = (id) => (dispatch) => {
  dispatch({ type: scaleTypes.SCALE_FETCH_STARTED });

  return axios
    .get(`/scale/id/${id}`)
    .then((res) => {
      if (res.status === 200) {
        const { name, label, layout, scale } = res.data;
        const payload = {
          name,
          label,
          layout,
          scaleSimple: scale.round,
        };
        dispatch({ type: scaleTypes.LOAD_SCALE, payload });
      }
    })
    .catch((error) =>
      dispatch({ type: scaleTypes.SCALE_FETCH_ERROR, payload: error.message })
    );
};

export const loadScale = (scale) => ({
  type: scaleTypes.LOAD_SCALE,
  payload: scale,
});

export const removeNoteFromScale = (noteToRemove) => ({
  type: scaleTypes.REMOVE_NOTE,
  payload: noteToRemove,
});

export const setScaleName = (name) => ({
  type: scaleTypes.SET_NAME,
  payload: name,
});

export const transposeScale = (destination) => ({
  type: scaleTypes.TRANSPOSE_SCALE,
  payload: destination,
});
