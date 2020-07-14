import React from 'react';
import { connect } from 'react-redux';
import { MAX_NOTE_VALUE, MIN_NOTE_VALUE } from '../../assets/constants';
import { noteValueToName } from '../../assets/intervals';
import { flushDrumState } from '../../redux/drum/drum.actions';
import {
  addNoteToScale,
  removeNoteFromScale,
  transposeScale,
} from '../../redux/scale/scale.actions';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import { EditContainer, Note, Notes } from './scaleEdit.styles';

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
        disabled={isSongPlaying}
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

const ScaleEdit = ({
  scale,
  addNoteToScale,
  flushDrumState,
  isSongPlaying,
  removeNoteFromScale,
  transposeScale,
}) => {
  const handleAdd = (note) => {
    if (isSongPlaying) return;
    flushDrumState();
    addNoteToScale(note);
  };

  const handleRemove = (note) => {
    if (isSongPlaying) return;
    flushDrumState();
    removeNoteFromScale(note);
  };

  const handleTranspose = (destination) => {
    flushDrumState();
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
  scale: scale.scaleSimple,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  addNoteToScale,
  flushDrumState,
  removeNoteFromScale,
  transposeScale,
})(ScaleEdit);
