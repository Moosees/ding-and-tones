import React from 'react';
import { connect } from 'react-redux';
import { MAX_NOTE_VALUE, MIN_NOTE_VALUE } from '../../constants';
import { noteValueToName } from '../../intervals.data';
import { flushDrumState } from '../../redux/drum/drum.actions';
import {
  addNoteToScale,
  removeNoteFromScale,
  transposeScale,
} from '../../redux/scale/scale.actions';
import BtnPrimary from '../button/Primary';
import { Buttons, EditContainer, Note, Notes } from './scaleEdit.styles';

const getNotes = (scale, fnAdd, fnRemove) => {
  const notes = [];

  for (let i = MIN_NOTE_VALUE; i <= MAX_NOTE_VALUE; ++i) {
    const noteName = noteValueToName[i];
    const isNoteInScale = scale.includes(noteName);

    const handleClick = isNoteInScale
      ? () => fnRemove(noteName)
      : () => fnAdd(noteName);

    notes.push(
      <Note key={i} inScale={isNoteInScale} onClick={handleClick}>
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
  removeNoteFromScale,
  transposeScale,
}) => {
  const handleAdd = (note) => {
    flushDrumState();
    addNoteToScale(note);
  };

  const handleRemove = (note) => {
    flushDrumState();
    removeNoteFromScale(note);
  };

  const handleTranspose = (destination) => {
    flushDrumState();
    transposeScale(destination);
  };

  const notes = getNotes(scale, handleAdd, handleRemove);

  return (
    <EditContainer>
      <Notes>{notes}</Notes>
      <Buttons>
        <BtnPrimary label="Up" light onClick={() => handleTranspose(1)} />
        <BtnPrimary label="Down" light onClick={() => handleTranspose(-1)} />
      </Buttons>
    </EditContainer>
  );
};

const mapStateToProps = ({ scale }) => ({
  scale: scale.scaleSimple,
});

export default connect(mapStateToProps, {
  addNoteToScale,
  flushDrumState,
  removeNoteFromScale,
  transposeScale,
})(ScaleEdit);
