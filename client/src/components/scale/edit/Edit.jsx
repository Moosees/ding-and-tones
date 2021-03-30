import React from 'react';
import { connect } from 'react-redux';
import { MAX_NOTE_VALUE, MIN_NOTE_VALUE } from '../../../assets/constants';
import { noteValueToName } from '../../../assets/intervals';
import {
  addNoteToScale,
  removeNoteFromScale,
  transposeScale,
} from '../../../redux/scale/scale.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import { EditContainer, Note, Notes } from './edit.styles';

const getNotes = (
  extra,
  round,
  fnAdd,
  fnRemove,
  isSongPlaying,
  addExtraNotes
) => {
  const extraNotes = extra.map(({ note }) => note);
  const notes = [];

  for (let i = MIN_NOTE_VALUE; i <= MAX_NOTE_VALUE; ++i) {
    const noteName = noteValueToName[i];
    const isNoteInRound = round.includes(noteName);
    const isNoteInExtra = extraNotes.includes(noteName);
    const isNoteInScale = isNoteInRound || isNoteInExtra;
    const disabled =
      (!isNoteInScale && addExtraNotes && extra.length >= 6) ||
      (!isNoteInScale && !addExtraNotes && round.length >= 14);

    const handleClick = isNoteInScale
      ? () => fnRemove(noteName)
      : () => fnAdd(noteName);

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

const Edit = ({
  addExtraNotes,
  addNoteToScale,
  extra,
  isSongPlaying,
  removeNoteFromScale,
  round,
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

  const handleTranspose = (destination) => {
    transposeScale(destination);
  };

  const notes = getNotes(
    extra,
    round,
    handleAdd,
    handleRemove,
    isSongPlaying,
    addExtraNotes
  );

  return (
    <EditContainer>
      <Notes>{notes}</Notes>
      <Buttons position="center">
        <BtnPrimary
          disabled={isSongPlaying}
          label="Up"
          light
          onClick={() => handleTranspose(1)}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="Down"
          light
          onClick={() => handleTranspose(-1)}
        />
      </Buttons>
    </EditContainer>
  );
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
  transposeScale,
})(Edit);
