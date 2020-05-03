import React from 'react';
import { connect } from 'react-redux';
import {
  addNoteToScale,
  removeNoteFromScale,
} from '../../redux/scale/scale.actions';
import { noteValueToName } from '../../intervals.data';
import { useMemo } from 'react';
import { Note, NoteContainer } from './editScale.styles';

const getNotes = (scale, fnAdd, fnRemove) => {
  const scaleStr = scale.join('');
  const notes = [];
  // c2 to c5
  for (let i = 24; i <= 60; ++i) {
    const noteName = noteValueToName[i].split('-');
    const isNoteInScale =
      scaleStr.includes(noteName[0]) || scaleStr.includes(noteName[1]);

    const handleClick = isNoteInScale
      ? () => fnRemove(noteName[0])
      : () => fnAdd(noteName[0]);

    notes.push(
      <Note key={i} inScale={isNoteInScale} onClick={handleClick}>
        {noteName[0]}
      </Note>
    );
  }
  console.log({ notes });
  return notes;
};

const EditScale = ({ scale, addNoteToScale, removeNoteFromScale }) => {
  const notes = useMemo(
    () => getNotes(scale, addNoteToScale, removeNoteFromScale),
    [scale, addNoteToScale, removeNoteFromScale]
  );

  return <NoteContainer>{notes}</NoteContainer>;
};

const mapStateToProps = ({ scale }) => ({
  scale: scale.scaleSimple,
});

export default connect(mapStateToProps, {
  addNoteToScale,
  removeNoteFromScale,
})(EditScale);
