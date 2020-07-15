import axios from 'axios';
import scaleTypes from './scale.types';

export const addNoteToScale = (newNote) => ({
  type: scaleTypes.ADD_NOTE,
  payload: newNote,
});

export const deleteScaleById = (scaleId, name) => (dispatch) => {
  dispatch({ type: scaleTypes.DELETE_STARTED });

  return axios
    .delete(`/scale/id/${scaleId}`)
    .then((res) => {
      if (res.status === 200)
        dispatch({
          type: scaleTypes.DELETE_SUCCESSFUL,
          payload: { scaleId, name },
        });
    })
    .catch((error) =>
      dispatch({ type: scaleTypes.DELETE_ERROR, payload: error.message })
    );
};

export const getScaleById = (id) => (dispatch) => {
  dispatch({ type: scaleTypes.FETCH_STARTED });

  return axios
    .get(`/scale/id/${id}`)
    .then((res) => {
      if (res.status === 200)
        dispatch({ type: scaleTypes.FETCH_SUCCESSFUL, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: scaleTypes.FETCH_ERROR, payload: error.message })
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

export const saveScale = (scale) => (dispatch) => {
  dispatch({ type: scaleTypes.SAVE_STARTED });

  return axios
    .post('/scale', scale)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: scaleTypes.SAVE_SUCCESSFUL, payload: res.data });
      }
    })
    .catch((error) =>
      dispatch({ type: scaleTypes.SAVE_ERROR, payload: error.message })
    );
};

export const setScaleName = (name) => ({
  type: scaleTypes.SET_NAME,
  payload: name,
});

export const transposeScale = (destination) => ({
  type: scaleTypes.TRANSPOSE_SCALE,
  payload: destination,
});
