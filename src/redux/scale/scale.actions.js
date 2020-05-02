import actionTypes from './scale.types';

export const addNoteToScale = (newNote) => ({
  type: actionTypes.ADD_NOTE,
  payload: newNote,
});

export const removeNoteFromScale = (noteToRemove) => ({
  type: actionTypes.REMOVE_NOTE,
  payload: noteToRemove,
});

export const saveScale = (scale) => ({
  type: actionTypes.SAVE_SCALE,
  payload: scale,
});
