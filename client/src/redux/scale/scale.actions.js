import axios from 'axios';
import actionTypes from './scale.types';

export const addNoteToScale = (newNote) => ({
  type: actionTypes.ADD_NOTE,
  payload: newNote,
});

export const getScaleById = (id) => (dispatch) => {
  dispatch({ type: actionTypes.SCALE_FETCH_STARTED });

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
        dispatch({ type: actionTypes.LOAD_SCALE, payload });
      }
    })
    .catch((error) =>
      dispatch({ type: actionTypes.SCALE_FETCH_ERROR, payload: error.message })
    );
};

export const loadScale = (scale) => ({
  type: actionTypes.LOAD_SCALE,
  payload: scale,
});

export const removeNoteFromScale = (noteToRemove) => ({
  type: actionTypes.REMOVE_NOTE,
  payload: noteToRemove,
});

export const setScaleName = (name) => ({
  type: actionTypes.SET_NAME,
  payload: name,
});

export const transposeScale = (destination) => ({
  type: actionTypes.TRANSPOSE_SCALE,
  payload: destination,
});
