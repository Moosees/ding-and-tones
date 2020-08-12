import axios from 'axios';
import scaleTypes from './scale.types';
import {
  sortScaleByFreq,
  transposeScaleToDestination,
  parseNotesForSaveScale,
} from './scale.utils';

export const addNoteToScale = (newNote) => (dispatch, getState) => {
  const { scale } = getState();
  const newScale = sortScaleByFreq([...scale.notes.round, newNote]);

  dispatch({
    type: scaleTypes.UPDATE_SCALE,
    payload: newScale,
  });
};

export const deleteScaleById = (scaleId) => (dispatch) => {
  dispatch({ type: scaleTypes.DELETE_STARTED });

  return axios
    .delete(`/scale/id/${scaleId}`)
    .then((res) => {
      if (res.status === 200)
        dispatch({
          type: scaleTypes.DELETE_SUCCESSFUL,
          payload: {
            scaleId: res.data._id,
            alert: `"${res.data.info.rootName} ${res.data.info.name}" deleted`,
          },
        });
    })
    .catch((error) =>
      dispatch({ type: scaleTypes.DELETE_ERROR, payload: error.message })
    );
};

export const getScaleById = (scaleId) => (dispatch) => {
  dispatch({ type: scaleTypes.FETCH_STARTED });

  return axios
    .get(`/scale/id/${scaleId}`)
    .then((res) => {
      if (res.status === 200)
        dispatch({
          type: scaleTypes.FETCH_SUCCESSFUL,
          payload: {
            ...res.data,
            alert: `"${res.data.info.rootName} ${res.data.info.name}" loaded`,
          },
        });
    })
    .catch((error) =>
      dispatch({ type: scaleTypes.FETCH_ERROR, payload: error.message })
    );
};

export const loadScale = (scale) => ({
  type: scaleTypes.LOAD_SCALE,
  payload: {
    ...scale,
    alert: `"${scale.info.rootName} ${scale.info.name}" loaded`,
  },
});

export const removeNoteFromScale = (noteToRemove) => (dispatch, getState) => {
  const { scale } = getState();
  const newScale = scale.notes.round.filter((note) => note !== noteToRemove);

  dispatch({
    type: scaleTypes.UPDATE_SCALE,
    payload: newScale,
  });
};

export const saveScale = () => (dispatch, getState) => {
  dispatch({ type: scaleTypes.SAVE_STARTED });

  const { scale } = getState();
  const { info, notes } = scale;

  return axios
    .post('/scale', { info, notes: parseNotesForSaveScale(notes) })
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: scaleTypes.SAVE_SUCCESSFUL,
          payload: {
            ...res.data,
            alert: `"${res.data.info.rootName} ${res.data.info.name}" saved`,
          },
        });
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

export const transposeScale = (destination) => (dispatch, getState) => {
  const { scale } = getState();
  const newScale = transposeScaleToDestination(scale.notes.round, destination);

  dispatch({
    type: scaleTypes.UPDATE_SCALE,
    payload: newScale,
  });
};
