import actionTypes from './scale.types';

export const addNoteToScale = (newNote) => ({
  type: actionTypes.ADD_NOTE,
  payload: newNote,
});

export const loadScale = (name, layout, scaleAry) => ({
  type: actionTypes.LOAD_SCALE,
  payload: { name, layout, scaleAry },
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
