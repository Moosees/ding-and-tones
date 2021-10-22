import axios from 'axios';
import { getNoteLabelFromName, noteValueToName } from '../../assets/intervals';
import scaleTypes from './scale.types';
import {
  addExtraNotesPos,
  createFullScaleFromNames,
  createPositionMap,
  createScaleLabel,
  parseNotesForSaveScale,
  parseScaleData,
  sortScaleByFreq,
  transposeExtraToDestination,
  transposeRoundToDestination,
} from './scale.utils';

export const addNoteToScale = (newNote) => (dispatch, getState) => {
  const {
    scale: { info, notes, ui },
    ui: { addExtraNotes },
  } = getState();

  const newRound = addExtraNotes
    ? notes.round
    : sortScaleByFreq([...notes.round, newNote]);

  const newPositionMap = addExtraNotes
    ? ui.positionMap
    : createPositionMap(info.layout, newRound.length);

  const newExtra = addExtraNotes
    ? addExtraNotesPos(
        sortScaleByFreq([...notes.extra.map(({ note }) => note), newNote])
      )
    : notes.extra;

  const { newFull, newRoot } = createFullScaleFromNames(
    newRound,
    newExtra,
    info.sharpNotes
  );

  dispatch({
    type: scaleTypes.UPDATE_SCALE,
    payload: { newRound, newExtra, newFull, newRoot, newPositionMap },
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

  return axios
    .get(`/scale/id/${scaleId}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: scaleTypes.FETCH_SUCCESSFUL,
          payload: parseScaleData(res.data),
        });

        return Promise.resolve(`/scale/${res.data.scaleId}`);
      }
    })
    .catch((error) => {
      dispatch({
        type: scaleTypes.FETCH_ERROR,
        payload: {
          alert: error.response ? error.response.data.msg : 'Scale not found',
        },
      });

      return Promise.resolve('/scale');
    });
};

export const loadScale = (scale, suppressAlert) => {
  return {
    type: scaleTypes.LOAD_SCALE,
    payload: parseScaleData(scale, suppressAlert),
  };
};

export const moveExtraNotes = (oldPos, newPos, swap = false) => ({
  type: scaleTypes.MOVE_EXTRA_NOTES,
  payload: { oldPos, newPos, swap },
});

export const newScale = () => ({ type: scaleTypes.NEW_SCALE });

export const removeNoteFromScale = (noteToRemove) => (dispatch, getState) => {
  const {
    scale: { info, notes, ui },
  } = getState();

  const newRound =
    notes.round.length > 1
      ? notes.round.filter((note) => note !== noteToRemove)
      : notes.round;

  const newPositionMap =
    notes.round.length === newRound.length
      ? ui.positionMap
      : createPositionMap(info.layout, newRound.length);

  const newExtra = notes.extra.filter(({ note }) => note !== noteToRemove);

  const { newFull, newRoot } = createFullScaleFromNames(
    newRound,
    newExtra,
    info.sharpNotes
  );

  dispatch({
    type: scaleTypes.UPDATE_SCALE,
    payload: { newRound, newExtra, newFull, newRoot, newPositionMap },
  });
};

export const saveScale = (scaleName) => (dispatch, getState) => {
  dispatch({ type: scaleTypes.SAVE_STARTED });

  const { scale } = getState();
  const { info, notes } = scale;
  const scaleUpdate = {
    info,
    notes: parseNotesForSaveScale(notes),
  };
  if (scaleName) scaleUpdate.info.name = scaleName;

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
            ...parseScaleData(res.data),
            searchData: res.data,
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

export const toggleSharps = () => (dispatch, getState) => {
  const {
    scale: {
      info: { rootValue, sharpNotes },
      notes: { round, extra },
    },
  } = getState();

  const label = createScaleLabel(extra, round, !sharpNotes);

  const rootName = getNoteLabelFromName(
    noteValueToName[rootValue],
    !sharpNotes
  ).slice(0, -1);

  dispatch({
    type: scaleTypes.TOGGLE_SHARPS,
    payload: { label, rootName, sharpNotes: !sharpNotes },
  });
};

export const transposeScale = (destination) => (dispatch, getState) => {
  const {
    scale: { info, notes, ui },
  } = getState();
  const newRound = transposeRoundToDestination(notes.round, destination);

  if (!newRound.length) return;

  const newPositionMap =
    notes.round.length === newRound.length
      ? ui.positionMap
      : createPositionMap(info.layout, newRound.length);

  const newExtra = transposeExtraToDestination(notes.extra, destination);

  const { newFull, newRoot } = createFullScaleFromNames(
    newRound,
    newExtra,
    info.sharpNotes
  );

  dispatch({
    type: scaleTypes.UPDATE_SCALE,
    payload: { newRound, newExtra, newFull, newRoot, newPositionMap },
  });
};
