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

const getNotes = (round, mutant, fnAdd, fnRemove, isSongPlaying, addMutant) => {
  const notes = [];
  const mutantNotes = mutant.map(({ note }) => note);

  for (let i = MIN_NOTE_VALUE; i <= MAX_NOTE_VALUE; ++i) {
    const noteName = noteValueToName[i];
    const isNoteInRound = round.includes(noteName);
    const isNoteInMutant = mutantNotes.includes(noteName);
    const isNoteInScale = isNoteInRound || isNoteInMutant;
    const disabled =
      (!isNoteInScale && addMutant && mutant.length >= 8) ||
      (!isNoteInScale && !addMutant && round.length >= 14);

    const handleClick = isNoteInScale
      ? () => fnRemove(noteName)
      : () => fnAdd(noteName);

    notes.push(
      <Note
        disabled={disabled}
        key={i}
        inRound={isNoteInRound}
        inMutant={isNoteInMutant}
        onClick={handleClick}
      >
        <span>{noteName}</span>
      </Note>
    );
  }
  return notes;
};

const Edit = ({
  addMutant,
  addNoteToScale,
  isSongPlaying,
  mutant,
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
    round,
    mutant,
    handleAdd,
    handleRemove,
    isSongPlaying,
    addMutant
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
  round: scale.notes.round,
  mutant: scale.notes.mutant,
  addMutant: ui.addMutant,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  addNoteToScale,
  removeNoteFromScale,
  transposeScale,
})(Edit);
