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

const getNotes = (scale, fnAdd, fnRemove, isSongPlaying) => {
  const notes = [];

  for (let i = MIN_NOTE_VALUE; i <= MAX_NOTE_VALUE; ++i) {
    const noteName = noteValueToName[i];
    const isNoteInScale = scale.includes(noteName);

    const handleClick = isNoteInScale
      ? () => fnRemove(noteName)
      : () => fnAdd(noteName);

    notes.push(
      <Note
        disabled={!isNoteInScale && scale.length >= 15}
        key={i}
        inScale={isNoteInScale}
        onClick={handleClick}
      >
        <span>{noteName}</span>
      </Note>
    );
  }
  return notes;
};

const Edit = ({
  addNoteToScale,
  isSongPlaying,
  mutant,
  removeNoteFromScale,
  round,
  transposeScale,
}) => {
  const scale = [...mutant.map((note) => note.note), ...round];

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

  const notes = getNotes(scale, handleAdd, handleRemove, isSongPlaying);

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
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  addNoteToScale,
  removeNoteFromScale,
  transposeScale,
})(Edit);
