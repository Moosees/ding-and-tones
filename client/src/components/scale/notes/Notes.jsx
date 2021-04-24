import React from 'react';
import { connect } from 'react-redux';
import { MAX_NOTE_VALUE, MIN_NOTE_VALUE } from '../../../assets/constants';
import { noteValueToName } from '../../../assets/intervals';
import {
  addNoteToScale,
  removeNoteFromScale,
} from '../../../redux/scale/scale.actions';
import { Note, NotesContainer } from './notes.styles';

const Notes = ({
  addExtraNotes,
  addNoteToScale,
  extra,
  isSongPlaying,
  removeNoteFromScale,
  round,
}) => {
  const handleAdd = (note) => {
    if (isSongPlaying) return;
    addNoteToScale(note);
  };

  const handleRemove = (note) => {
    if (isSongPlaying) return;
    removeNoteFromScale(note);
  };

  const getNotes = () => {
    const extraNotes = extra.map(({ note }) => note);
    const notes = [];

    for (let i = MIN_NOTE_VALUE; i <= MAX_NOTE_VALUE; ++i) {
      const noteName = noteValueToName[i];
      const isNoteInRound = round.includes(noteName);
      const isNoteInExtra = extraNotes.includes(noteName);
      const isNoteInScale = isNoteInRound || isNoteInExtra;
      const disabled =
        (!isNoteInScale && addExtraNotes && extraNotes.length >= 8) ||
        (!isNoteInScale && !addExtraNotes && round.length >= 14);

      const handleClick = isNoteInScale
        ? () => handleRemove(noteName)
        : () => handleAdd(noteName);

      notes.push(
        <Note
          disabled={disabled}
          key={i}
          inRound={isNoteInRound}
          inExtra={isNoteInExtra}
          onClick={handleClick}
        >
          <span>{noteName}</span>
        </Note>
      );
    }
    return notes;
  };

  return <NotesContainer>{getNotes()}</NotesContainer>;
};

const mapStateToProps = ({ scale, ui }) => ({
  extra: scale.notes.extra,
  round: scale.notes.round,
  addExtraNotes: ui.addExtraNotes,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  addNoteToScale,
  removeNoteFromScale,
})(Notes);
