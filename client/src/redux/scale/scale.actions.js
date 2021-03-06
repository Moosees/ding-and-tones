import axios from 'axios';
import scaleTypes from './scale.types';
import {
  parseNotesForSaveScale,
  sortScaleByFreq,
  transposeScaleToDestination,
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

  axios
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
    .catch((error) => {
      dispatch({
        type: scaleTypes.DELETE_ERROR,
        payload: {
          alert: error.response ? error.response.data.msg : 'Delete failed',
        },
      });
    });
};

export const getScaleById = (scaleId) => (dispatch) => {
  dispatch({ type: scaleTypes.FETCH_STARTED });

  axios
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
    .catch((error) => {
      dispatch({
        type: scaleTypes.FETCH_ERROR,
        payload: {
          alert: error.response ? error.response.data.msg : 'Scale not found',
        },
      });
    });
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

  if (scale.notes.round.length <= 1) return;

  const newScale = scale.notes.round.filter((note) => note !== noteToRemove);

  dispatch({
    type: scaleTypes.UPDATE_SCALE,
    payload: newScale,
  });
};

export const saveScale = ({ name }) => (dispatch, getState) => {
  dispatch({ type: scaleTypes.SAVE_STARTED });

  const { scale } = getState();
  const { info, notes } = scale;
  const scaleUpdate = { info, notes: parseNotesForSaveScale(notes) };
  if (name) scaleUpdate.info.name = name;

  axios
    .post('/scale', scaleUpdate)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.msg)
          return dispatch({
            type: scaleTypes.SAVE_ERROR,
            payload: {
              alert: res.data.msg,
            },
          });

        dispatch({
          type: scaleTypes.SAVE_SUCCESSFUL,
          payload: {
            ...res.data,
            alert: `"${res.data.info.rootName} ${res.data.info.name}" saved`,
          },
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: scaleTypes.SAVE_ERROR,
        payload: {
          alert: error.response ? error.response.data.msg : 'Save failed',
        },
      });
    });
};

export const setScaleName = (name) => ({
  type: scaleTypes.SET_NAME,
  payload: name,
});

export const transposeScale = (destination) => (dispatch, getState) => {
  const { scale } = getState();
  const newScale = transposeScaleToDestination(scale.notes.round, destination);

  if (!newScale.length) return;

  dispatch({
    type: scaleTypes.UPDATE_SCALE,
    payload: newScale,
  });
};
