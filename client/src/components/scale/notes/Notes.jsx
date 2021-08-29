import React from 'react';
import { connect } from 'react-redux';
import { MAX_NOTE_VALUE, MIN_NOTE_VALUE } from '../../../assets/constants';
import {
  getNoteLabelFromName,
  noteValueToName
} from '../../../assets/intervals';
import {
  addNoteToScale,
  removeNoteFromScale,
  toggleSharps,
  transposeScale
} from '../../../redux/scale/scale.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import DividerLine from '../../shared/dividerLine/DividerLine';
import { Note, NotesList, TextLabel } from './notes.styles';

const Notes = ({
  addExtraNotes,
  addNoteToScale,
  extra,
  isSongPlaying,
  removeNoteFromScale,
  round,
  sharpNotes,
  toggleSharps,
  transposeScale,
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
          <span>{getNoteLabelFromName(noteName, sharpNotes)}</span>
        </Note>
      );
    }
    return notes;
  };

  return (
    <>
      <TextLabel>Transpose Scale</TextLabel>
      <Buttons position="center">
        <BtnPrimary
          disabled={isSongPlaying}
          label="- 8va"
          light
          onClick={() => transposeScale(-12)}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="Down"
          light
          onClick={() => transposeScale(-1)}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="#/b"
          light
          onClick={toggleSharps}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="Up"
          light
          onClick={() => transposeScale(1)}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="+ 8va"
          light
          onClick={() => transposeScale(12)}
        />
      </Buttons>
      <DividerLine small />
      <NotesList>{getNotes()}</NotesList>
      <DividerLine small />
    </>
  );
};

const mapStateToProps = ({ scale, ui }) => ({
  sharpNotes: scale.info.sharpNotes,
  extra: scale.notes.extra,
  round: scale.notes.round,
  addExtraNotes: ui.addExtraNotes,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  addNoteToScale,
  removeNoteFromScale,
  toggleSharps,
  transposeScale,
})(Notes);
