import axios from 'axios';
import { defaultScale } from '../../assets/defaultData';
import { getNoteLabelFromName, noteValueToName } from '../../assets/intervals';
import scaleTypes from './scale.types';
import {
  addExtraNotesPos,
  createFullScaleFromNames,
  createPositionMap,
  createScaleLabel,
  parseScaleData,
  sortScaleByFreq,
  transposeNotesToDestination,
} from './scale.utils';

export const addNoteToScale = (newNote) => (dispatch, getState) => {
  const {
    scale: { info, notes },
    ui: { isAddingExtraNotes },
  } = getState();

  const payload = {
    notes: {},
    parsed: {},
    info: {},
  };

  if (isAddingExtraNotes) {
    const newExtraSorted = sortScaleByFreq([
      ...notes.extra.map(({ note }) => note),
      newNote,
    ]);

    const newExtraWithPos = addExtraNotesPos(newExtraSorted);

    payload.notes.extra = newExtraWithPos;
  }

  if (!isAddingExtraNotes) {
    const newInnerSorted = sortScaleByFreq([
      ...notes.dings,
      ...notes.round,
      newNote,
    ]);

    const newPositions = createPositionMap(info.layout, newInnerSorted.length);

    payload.notes.dings = [newInnerSorted[0]];
    payload.notes.round = newInnerSorted.slice(1);
    payload.parsed.positions = newPositions;
  }

  const tempNotes = {
    dings: payload.notes.dings || notes.dings,
    round: payload.notes.round || notes.round,
    extra: payload.notes.extra || notes.extra,
  };

  const { rootInfo, pitched } = createFullScaleFromNames(
    tempNotes,
    info.sharpNotes
  );

  payload.info = rootInfo;
  payload.parsed.pitched = pitched;

  payload.info.label = createScaleLabel(tempNotes, info.sharpNotes);

  dispatch({
    type: scaleTypes.UPDATE_SCALE,
    payload,
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

export const getScaleById = (scaleId, firstLoad) => (dispatch) => {
  dispatch({ type: scaleTypes.FETCH_STARTED });

  return axios
    .get(`/scale/id/${scaleId}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: scaleTypes.FETCH_SUCCESSFUL,
          payload: parseScaleData(res.data),
        });
      }
    })
    .catch((error) => {
      firstLoad &&
        dispatch({
          type: scaleTypes.LOAD_SCALE,
          payload: parseScaleData(defaultScale, true),
        });

      dispatch({
        type: scaleTypes.FETCH_ERROR,
        payload: {
          alert: 'Could not load scale',
        },
      });
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
    scale: { info, notes, parsed },
  } = getState();

  const { type } = parsed.pitched.find((note) => note.note === noteToRemove);

  if (
    notes.dings.length + notes.round.length === 1 &&
    ['dings', 'round'].includes(type)
  ) {
    return;
  }

  const payload = {
    notes: {},
    parsed: {},
    info: {},
  };

  payload.notes = {
    ...notes,
    [type]: notes[type].filter((note) => (note.note || note) !== noteToRemove),
  };

  if (!payload.notes.dings.length) {
    payload.notes.dings.push(payload.notes.round[0]);
    payload.notes.round = payload.notes.round.slice(1);
  }

  payload.parsed.positions =
    type === 'extra'
      ? parsed.positions
      : createPositionMap(
          info.layout,
          payload.notes.dings.length + payload.notes.round.length
        );

  const { rootInfo, pitched } = createFullScaleFromNames(
    payload.notes,
    info.sharpNotes
  );

  payload.info = rootInfo;
  payload.parsed.pitched = pitched;

  payload.info.label = createScaleLabel(payload.notes, info.sharpNotes);

  dispatch({
    type: scaleTypes.UPDATE_SCALE,
    payload,
  });
};

export const rotateDrum = (angle) => ({
  type: scaleTypes.ROTATE_DRUM,
  payload: angle,
});

export const saveScale = (scaleName) => (dispatch, getState) => {
  dispatch({ type: scaleTypes.SAVE_STARTED });

  const { scale } = getState();
  const { info, notes } = scale;

  if (notes.dings.length + notes.round.length + notes.extra.length < 5) {
    return dispatch({
      type: scaleTypes.SAVE_ERROR,
      payload: { alert: 'Scale needs at least five notes' },
    });
  }

  const scaleUpdate = {
    info,
    notes,
  };

  if (scaleName) {
    scaleUpdate.info.name = scaleName;
  }

  axios
    .post('/scale', scaleUpdate)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.msg) {
          return dispatch({
            type: scaleTypes.SAVE_ERROR,
            payload: {
              alert: res.data.msg,
            },
          });
        }

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
      notes,
    },
  } = getState();

  const label = createScaleLabel(notes, !sharpNotes);

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
    scale: { notes, parsed, info },
  } = getState();

  const payload = {
    notes: {},
    parsed: {},
    info: {},
  };

  payload.notes = transposeNotesToDestination(notes, destination);

  if (!payload.notes.dings[0]) return;

  const oldLength = notes.round.length + notes.dings.length;
  const newLength = payload.notes.round.length + payload.notes.dings.length;

  payload.parsed.positions =
    oldLength === newLength
      ? parsed.positions
      : createPositionMap(info.layout, newLength);

  const { rootInfo, pitched } = createFullScaleFromNames(
    payload.notes,
    info.sharpNotes
  );

  payload.info = rootInfo;
  payload.parsed.pitched = pitched;

  payload.info.label = createScaleLabel(payload.notes, info.sharpNotes);

  dispatch({
    type: scaleTypes.UPDATE_SCALE,
    payload,
  });
};
